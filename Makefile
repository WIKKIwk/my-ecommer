.PHONY: up down restart logs clean setup migrate superuser help prod-up dev deploy menu
.DEFAULT_GOAL := menu

# Detect Docker Compose command (supports both old and new versions)
DOCKER_COMPOSE := $(shell if docker compose version >/dev/null 2>&1; then echo "docker compose"; else echo "docker-compose"; fi)

# Colors for better UI
RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[1;33m
BLUE=\033[0;34m
PURPLE=\033[0;35m
CYAN=\033[0;36m
NC=\033[0m

menu:
	@clear
	@echo ""
	@echo "$(CYAN)╔════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(CYAN)║$(NC)  $(PURPLE)🍜 Taomchi E-Commerce - Deployment Menu$(NC)              $(CYAN)║$(NC)"
	@echo "$(CYAN)╚════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "  $(GREEN)1)$(NC) 🚀 Development Mode    $(YELLOW)(localhost - for testing)$(NC)"
	@echo "  $(GREEN)2)$(NC) 🌐 Production Mode     $(YELLOW)(server deployment)$(NC)"
	@echo "  $(GREEN)3)$(NC) 🛑 Stop All Services"
	@echo "  $(GREEN)4)$(NC) 📊 View Logs"
	@echo "  $(GREEN)5)$(NC) 🧹 Clean Everything"
	@echo "  $(GREEN)6)$(NC) 📖 Help & Commands"
	@echo "  $(GREEN)0)$(NC) ❌ Exit"
	@echo ""
	@read -p "$(CYAN)Select option [0-6]: $(NC)" choice; \
	case $$choice in \
		1) make dev ;; \
		2) make deploy ;; \
		3) make down ;; \
		4) make logs ;; \
		5) make clean ;; \
		6) make help ;; \
		0) echo "$(GREEN)✅ Goodbye!$(NC)"; exit 0 ;; \
		*) echo "$(RED)❌ Invalid option!$(NC)"; sleep 2; make menu ;; \
	esac

help:
	@echo ""
	@echo "$(CYAN)🍜 Taomchi E-Commerce - Available Commands:$(NC)"
	@echo ""
	@echo "  $(PURPLE)🚀 Quick Start:$(NC)"
	@echo "     $(GREEN)make menu$(NC)      - Interactive menu (default)"
	@echo "     $(GREEN)make dev$(NC)       - Development mode (localhost)"
	@echo "     $(GREEN)make deploy$(NC)    - Production deployment"
	@echo "     $(GREEN)make setup$(NC)     - Full auto setup (first time)"
	@echo ""
	@echo "  $(PURPLE)🐳 Docker Commands:$(NC)"
	@echo "     $(GREEN)make up$(NC)        - Start all services"
	@echo "     $(GREEN)make down$(NC)      - Stop all services"
	@echo "     $(GREEN)make restart$(NC)   - Restart all services"
	@echo "     $(GREEN)make logs$(NC)      - View logs"
	@echo "     $(GREEN)make clean$(NC)     - Stop and remove all containers, volumes, images"
	@echo ""
	@echo "  $(PURPLE)🗄️  Database:$(NC)"
	@echo "     $(GREEN)make migrate$(NC)   - Run database migrations"
	@echo "     $(GREEN)make superuser$(NC) - Create admin user"
	@echo ""
	@echo "  $(PURPLE)📚 Access URLs:$(NC)"
	@echo "     Frontend:  $(CYAN)http://localhost:3000$(NC)"
	@echo "     Backend:   $(CYAN)http://localhost:8001/api/$(NC)"
	@echo "     Admin:     $(CYAN)http://localhost:8001/admin/$(NC)"
	@echo "     Mini-App:  $(CYAN)http://localhost:3001$(NC)"
	@echo ""
	@read -p "Press Enter to return to menu..." dummy
	@make menu

# 🚀 Development Mode (localhost)
dev:
	@clear
	@echo ""
	@echo "$(CYAN)╔════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(CYAN)║$(NC)  $(PURPLE)🚀 Starting Development Mode$(NC)                          $(CYAN)║$(NC)"
	@echo "$(CYAN)╚════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(YELLOW)📝 Development mode is for local testing on your PC$(NC)"
	@echo "$(YELLOW)   Access via: http://localhost:3000$(NC)"
	@echo ""
	@echo "$(GREEN)Starting services...$(NC)"
	@echo ""
	@if [ ! -f .env ]; then \
		echo "$(YELLOW)⚙️  Creating .env from .env.example...$(NC)"; \
		cp .env.example .env; \
	fi
	@if [ ! -f frontend/.env.local ]; then \
		echo "$(YELLOW)⚙️  Creating frontend/.env.local...$(NC)"; \
		cp frontend/.env.example frontend/.env.local; \
	fi
	@if [ ! -f mini-app/.env ]; then \
		echo "$(YELLOW)⚙️  Creating mini-app/.env...$(NC)"; \
		cp mini-app/.env.example mini-app/.env; \
	fi
	@$(DOCKER_COMPOSE) down --remove-orphans 2>/dev/null || true
	@$(DOCKER_COMPOSE) up -d --build
	@sleep 10
	@echo ""
	@echo "$(GREEN)⏳ Running migrations...$(NC)"
	@$(DOCKER_COMPOSE) exec -T backend python manage.py migrate 2>/dev/null || echo "$(YELLOW)⚠️  Migrations will run on first backend start$(NC)"
	@$(DOCKER_COMPOSE) exec -T backend python manage.py collectstatic --noinput 2>/dev/null || true
	@echo ""
	@echo "$(GREEN)╔════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(GREEN)║  ✅ Development Mode Started Successfully!$(NC)                $(GREEN)║$(NC)"
	@echo "$(GREEN)╚════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(CYAN)📍 Access URLs:$(NC)"
	@echo "   Frontend:  $(GREEN)http://localhost:3000$(NC)"
	@echo "   Backend:   $(GREEN)http://localhost:8001/api/$(NC)"
	@echo "   Admin:     $(GREEN)http://localhost:8001/admin/$(NC)"
	@echo "   Mini-App:  $(GREEN)http://localhost:3001$(NC)"
	@echo ""
	@echo "$(YELLOW)💡 Useful commands:$(NC)"
	@echo "   View logs:        $(GREEN)make logs$(NC)"
	@echo "   Stop services:    $(GREEN)make down$(NC)"
	@echo "   Create superuser: $(GREEN)make superuser$(NC)"
	@echo ""
	@read -p "Press Enter to return to menu..." dummy
	@make menu

# 🌐 Production Deployment
deploy:
	@clear
	@echo ""
	@echo "$(CYAN)╔════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(CYAN)║$(NC)  $(PURPLE)🌐 Production Deployment$(NC)                             $(CYAN)║$(NC)"
	@echo "$(CYAN)╚════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(YELLOW)⚠️  This will deploy in PRODUCTION mode$(NC)"
	@echo "$(YELLOW)   Use this on your server, not local PC$(NC)"
	@echo ""
	@read -p "$(CYAN)Continue? (y/N): $(NC)" confirm; \
	if [ "$$confirm" != "y" ] && [ "$$confirm" != "Y" ]; then \
		echo "$(RED)❌ Cancelled$(NC)"; \
		sleep 1; \
		make menu; \
		exit 0; \
	fi
	@make prod-up

# 🎯 Full Auto Setup (GitHub dan yuklab birinchi marta ishlatish uchun)
setup:
	@echo "🚀 Starting auto setup..."
	@echo ""
	@echo "📋 Step 1/6: Checking environment files..."
	@if [ ! -f .env ]; then \
		echo "  ⚙️  Creating .env from .env.example..."; \
		cp .env.example .env; \
		echo "  ✅ .env created"; \
	else \
		echo "  ✅ .env already exists"; \
	fi
	@if [ ! -f frontend/.env.local ]; then \
		echo "  ⚙️  Creating frontend/.env.local..."; \
		cp frontend/.env.example frontend/.env.local; \
		echo "  ✅ frontend/.env.local created"; \
	else \
		echo "  ✅ frontend/.env.local already exists"; \
	fi
	@if [ ! -f mini-app/.env ]; then \
		echo "  ⚙️  Creating mini-app/.env..."; \
		cp mini-app/.env.example mini-app/.env; \
		echo "  ✅ mini-app/.env created"; \
	else \
		echo "  ✅ mini-app/.env already exists"; \
	fi
	@echo ""
	@echo "📋 Step 2/6: Stopping existing containers..."
	@$(DOCKER_COMPOSE) down --remove-orphans 2>/dev/null || true
	@echo ""
	@echo "📋 Step 3/6: Building and starting containers..."
	@$(DOCKER_COMPOSE) up -d --build
	@echo ""
	@echo "📋 Step 4/6: Waiting for database to be ready..."
	@sleep 10
	@echo ""
	@echo "📋 Step 5/6: Running database migrations..."
	@$(DOCKER_COMPOSE) exec -T backend python manage.py migrate
	@echo ""
	@echo "📋 Step 6/6: Collecting static files..."
	@$(DOCKER_COMPOSE) exec -T backend python manage.py collectstatic --noinput
	@echo ""
	@echo "✅ Setup complete!"
	@echo ""
	@echo "🎉 Next steps:"
	@echo "  1. Create admin user:  make superuser"
	@echo "  2. Visit frontend:     http://localhost:3000"
	@echo "  3. Visit admin:        http://localhost:8001/admin/"
	@echo ""

# Start all services
up:
	@echo "🚀 Starting all services..."
	@$(DOCKER_COMPOSE) down --remove-orphans
	@$(DOCKER_COMPOSE) up -d --build
	@echo ""
	@echo "✅ All services started!"
	@echo ""
	@echo "📍 Access URLs:"
	@echo "  Frontend:  http://localhost:3000"
	@echo "  Backend:   http://localhost:8001/api/"
	@echo "  Admin:     http://localhost:8001/admin/"
	@echo "  Mini-App:  http://localhost:3001"
	@echo ""
	@echo "📊 View logs:     make logs"
	@echo "🛑 Stop services: make down"
	@echo ""

# Stop all services
down:
	@echo "🛑 Stopping all services..."
	@$(DOCKER_COMPOSE) down
	@echo "✅ All services stopped!"

# Restart all services
restart:
	@echo "🔄 Restarting all services..."
	@$(DOCKER_COMPOSE) restart
	@echo "✅ All services restarted!"

# View logs
logs:
	@echo "📊 Viewing logs (Ctrl+C to exit)..."
	@$(DOCKER_COMPOSE) logs -f

# Clean everything
clean:
	@echo "🧹 Cleaning all containers, volumes, and images..."
	@$(DOCKER_COMPOSE) down -v --rmi all --remove-orphans
	@echo "✅ Cleanup complete!"

# Run migrations
migrate:
	@echo "🗄️  Running database migrations..."
	@$(DOCKER_COMPOSE) exec backend python manage.py makemigrations
	@$(DOCKER_COMPOSE) exec backend python manage.py migrate
	@echo "✅ Migrations complete!"

# Create superuser
superuser:
	@echo "👤 Creating superuser..."
	@$(DOCKER_COMPOSE) exec backend python manage.py createsuperuser

# Check and configure domain
check-domain:
	@if [ ! -f .env ]; then \
		echo "⚙️  Creating .env from .env.example..."; \
		cp .env.example .env; \
	fi
	@echo ""
	@echo "🌐 Domain Configuration (optional)"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@if grep -q "DOMAIN_OR_IP=your-domain.com" .env || ! grep -q "DOMAIN_OR_IP=" .env; then \
		echo "📌 Current: Not configured (will use server IP automatically)"; \
		echo ""; \
		echo "👉 Enter your domain name (or press Enter to use server IP):"; \
		echo "   Examples: my-shop.com, shop.example.uz"; \
		read -p "   > " domain_val; \
		if [ ! -z "$$domain_val" ]; then \
			sed -i "s/DOMAIN_OR_IP=your-domain.com/DOMAIN_OR_IP=$$domain_val/" .env; \
			sed -i "s/DOMAIN_OR_IP=/DOMAIN_OR_IP=$$domain_val/" .env 2>/dev/null || true; \
			echo "✅ Domain configured to: $$domain_val"; \
		else \
			SERVER_IP=$$(curl -s ifconfig.me 2>/dev/null || echo "localhost"); \
			sed -i "s/DOMAIN_OR_IP=your-domain.com/DOMAIN_OR_IP=$$SERVER_IP/" .env; \
			sed -i "s/DOMAIN_OR_IP=/DOMAIN_OR_IP=$$SERVER_IP/" .env 2>/dev/null || true; \
			echo "✅ Using server IP: $$SERVER_IP"; \
		fi \
	else \
		CURRENT_DOMAIN=$$(grep DOMAIN_OR_IP .env | cut -d'=' -f2); \
		echo "📌 Current domain: $$CURRENT_DOMAIN"; \
		echo "✅ Domain already configured"; \
	fi
	@echo ""
	@if ! grep -q "CLOUDFLARE_TUNNEL_TOKEN=." .env; then \
		echo "🌥️  Cloudflare Tunnel (optional - for easy HTTPS access)"; \
		echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"; \
		echo "👉 Enter Cloudflare Tunnel token (or press Enter to skip):"; \
		echo "   Get free token: https://one.dash.cloudflare.com"; \
		read -p "   > " cf_token; \
		if [ ! -z "$$cf_token" ]; then \
			sed -i "s/CLOUDFLARE_TUNNEL_TOKEN=/CLOUDFLARE_TUNNEL_TOKEN=$$cf_token/" .env; \
			echo "✅ Cloudflare Tunnel configured!"; \
		else \
			echo "⏭️  Skipping Cloudflare (you can add it later)"; \
		fi \
	fi
	@echo ""


# Production deployment
prod-up: check-domain
	@echo "🌐 Starting production services..."
	@$(DOCKER_COMPOSE) -f docker-compose.production.yml down --remove-orphans
	@if grep -q "CLOUDFLARE_TUNNEL_TOKEN=." .env && ! grep -q "CLOUDFLARE_TUNNEL_TOKEN=$$" .env; then \
		echo "🌥️  Cloudflare Tunnel detected, activating tunnel..."; \
		$(DOCKER_COMPOSE) -f docker-compose.production.yml --profile cloudflare up -d --build; \
	else \
		$(DOCKER_COMPOSE) -f docker-compose.production.yml up -d --build; \
	fi
	@sleep 10
	@$(DOCKER_COMPOSE) -f docker-compose.production.yml exec -T backend python manage.py migrate
	@$(DOCKER_COMPOSE) -f docker-compose.production.yml exec -T backend python manage.py collectstatic --noinput
	@echo ""
	@echo "✅ Production services started!"
	@echo "🔒 Don't forget to configure SSL certificates!"
	@echo ""

