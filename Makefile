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
	@clear
	@echo ""
	@echo "$(PURPLE)   ╔══════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(PURPLE)   ║                                                              ║$(NC)"
	@echo "$(PURPLE)   ║          $(CYAN)🚀 KAMOLON Auto Setup Wizard$(PURPLE)                      ║$(NC)"
	@echo "$(PURPLE)   ║                                                              ║$(NC)"
	@echo "$(PURPLE)   ╚══════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@sleep 0.5
	@# Run setup.sh for automatic configuration
	@if [ -f setup.sh ]; then \
		echo "$(CYAN)   [1/6]$(NC) $(YELLOW)⚙️  Running automatic configuration...$(NC)"; \
		chmod +x setup.sh; \
		./setup.sh; \
		echo "$(GREEN)   [1/6] ✓ Auto-configuration complete$(NC)"; \
	else \
		echo "$(YELLOW)   ⚠️  setup.sh not found, using manual configuration...$(NC)"; \
	fi
	@echo ""
	@echo "$(CYAN)   [2/6]$(NC) $(YELLOW)📝 Checking environment files...$(NC)"
	@if [ ! -f .env ]; then \
		cp .env.example .env 2>/dev/null; \
		echo "$(GREEN)   [2/6] ✓ Created .env$(NC)"; \
	else \
		echo "$(GREEN)   [2/6] ✓ .env already exists$(NC)"; \
	fi
	@if [ ! -f frontend/.env.local ]; then \
		if [ -f frontend/.env.example ]; then \
			cp frontend/.env.example frontend/.env.local; \
		else \
			echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:8001/api" > frontend/.env.local; \
			echo "NEXT_PUBLIC_MEDIA_BASE_URL=http://localhost:8001" >> frontend/.env.local; \
		fi; \
		echo "$(GREEN)        ✓ Created frontend/.env.local$(NC)"; \
	else \
		echo "$(GREEN)        ✓ frontend/.env.local exists$(NC)"; \
	fi
	@if [ ! -f mini-app/.env ]; then \
		if [ -f mini-app/.env.example ]; then \
			cp mini-app/.env.example mini-app/.env; \
		else \
			echo "VITE_API_BASE_URL=http://localhost:8001/api" > mini-app/.env; \
		fi; \
		echo "$(GREEN)        ✓ Created mini-app/.env$(NC)"; \
	else \
		echo "$(GREEN)        ✓ mini-app/.env exists$(NC)"; \
	fi
	@sleep 0.3
	@echo ""
	@echo "$(CYAN)   [3/6]$(NC) $(YELLOW)🛑 Stopping existing containers...$(NC)"
	@$(DOCKER_COMPOSE) down --remove-orphans >/dev/null 2>&1 || true
	@echo "$(GREEN)   [3/6] ✓ Stopped$(NC)"
	@sleep 0.3
	@echo ""
	@echo "$(CYAN)   [4/6]$(NC) $(YELLOW)🔨 Building and starting containers...$(NC)"
	@$(DOCKER_COMPOSE) up -d --build >/tmp/setup-build.log 2>&1 & \
	BUILD_PID=$$!; \
	i=0; \
	while kill -0 $$BUILD_PID 2>/dev/null; do \
		i=$$((i + 1)); \
		bars=$$((i % 30)); \
		spaces=$$((30 - bars)); \
		printf "\r$(CYAN)   [4/6]$(NC) $(YELLOW)🔨 Building$(NC) ["; \
		printf "%0.s█" $$(seq 1 $$bars); \
		printf "%0.s " $$(seq 1 $$spaces); \
		printf "] "; \
		spinner=("⠋" "⠙" "⠹" "⠸" "⠼" "⠴" "⠦" "⠧" "⠇" "⠏"); \
		idx=$$((i % 10)); \
		printf "$${spinner[idx]}"; \
		sleep 0.1; \
	done; \
	wait $$BUILD_PID
	@printf "\r$(GREEN)   [4/6] ✓ Containers built and started                              $(NC)\n"
	@sleep 0.3
	@echo ""
	@echo "$(CYAN)   [5/6]$(NC) $(YELLOW)🗄️  Running database migrations...$(NC)"
	@$(DOCKER_COMPOSE) exec -T backend python manage.py makemigrations >/dev/null 2>&1 || echo "$(YELLOW)        ⚠️  No new migrations$(NC)"
	@$(DOCKER_COMPOSE) exec -T backend python manage.py migrate >/dev/null 2>&1
	@echo "$(GREEN)   [5/6] ✓ Migrations applied$(NC)"
	@sleep 0.3
	@echo ""
	@echo "$(CYAN)   [6/6]$(NC) $(YELLOW)📦 Collecting static files...$(NC)"
	@$(DOCKER_COMPOSE) exec -T backend python manage.py collectstatic --noinput >/dev/null 2>&1
	@echo "$(GREEN)   [6/6] ✓ Static files collected$(NC)"
	@sleep 0.5
	@echo ""
	@echo "$(GREEN)   ╔══════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(GREEN)   ║                                                              ║$(NC)"
	@echo "$(GREEN)   ║              ✅ $(PURPLE)Setup Complete!$(GREEN)                               ║$(NC)"
	@echo "$(GREEN)   ║                                                              ║$(NC)"
	@echo "$(GREEN)   ╚══════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(PURPLE)   🎉 Next Steps:$(NC)"
	@echo ""
	@echo "      $(CYAN)1.$(NC) Create admin user:  $(GREEN)make superuser$(NC)"
	@echo "      $(CYAN)2.$(NC) Visit frontend:     $(GREEN)http://localhost:3000$(NC)"
	@echo "      $(CYAN)3.$(NC) Visit admin panel:  $(GREEN)http://localhost:8001/admin/$(NC)"
	@echo "      $(CYAN)4.$(NC) Visit mini-app:     $(GREEN)http://localhost:3001$(NC)"
	@echo ""
	@echo "$(PURPLE)   ───────────────────────────────────────────────────────────────$(NC)"
	@echo ""



# Start all services
up:
	@clear
	@echo ""
	@echo "$(PURPLE)   ╔══════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(PURPLE)   ║                                                              ║$(NC)"
	@echo "$(PURPLE)   ║        $(CYAN)🍜 KAMOLON E-Commerce Platform$(PURPLE)                     ║$(NC)"
	@echo "$(PURPLE)   ║                                                              ║$(NC)"
	@echo "$(PURPLE)   ╚══════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@sleep 0.5
	@# Step 1: Stop existing containers
	@echo "$(CYAN)   [1/4]$(NC) $(YELLOW)⏳ Stopping existing containers...$(NC)"
	@$(DOCKER_COMPOSE) down --remove-orphans >/dev/null 2>&1 || true
	@printf "$(GREEN)   [1/4] ✓ Stopped existing containers$(NC)\n"
	@sleep 0.3
	@echo ""
	@# Step 2: Building images with progress bar
	@echo "$(CYAN)   [2/4]$(NC) $(YELLOW)🔨 Building Docker images...$(NC)"
	@$(DOCKER_COMPOSE) build >/tmp/docker-build.log 2>&1 & \
	BUILD_PID=$$!; \
	i=0; \
	while kill -0 $$BUILD_PID 2>/dev/null; do \
		i=$$((i + 1)); \
		bars=$$((i % 20)); \
		spaces=$$((20 - bars)); \
		printf "\r$(CYAN)   [2/4]$(NC) $(YELLOW)🔨 Building$(NC) ["; \
		printf "%0.s█" $$(seq 1 $$bars); \
		printf "%0.s " $$(seq 1 $$spaces); \
		printf "] "; \
		spinner=("⠋" "⠙" "⠹" "⠸" "⠼" "⠴" "⠦" "⠧" "⠇" "⠏"); \
		idx=$$((i % 10)); \
		printf "$${spinner[idx]}"; \
		sleep 0.1; \
	done; \
	wait $$BUILD_PID; \
	BUILD_EXIT=$$?; \
	if [ $$BUILD_EXIT -eq 0 ]; then \
		printf "\r$(GREEN)   [2/4] ✓ Docker images built successfully$(NC)                    \n"; \
	else \
		printf "\r$(RED)   [2/4] ✗ Build failed!$(NC)                                  \n"; \
		tail -20 /tmp/docker-build.log; \
		exit 1; \
	fi
	@sleep 0.3
	@echo ""
	@# Step 3: Starting services
	@echo "$(CYAN)   [3/4]$(NC) $(YELLOW)🚀 Starting services...$(NC)"
	@$(DOCKER_COMPOSE) up -d >/tmp/docker-start.log 2>&1 & \
	START_PID=$$!; \
	i=0; \
	while kill -0 $$START_PID 2>/dev/null; do \
		i=$$((i + 1)); \
		bars=$$((i % 20)); \
		spaces=$$((20 - bars)); \
		printf "\r$(CYAN)   [3/4]$(NC) $(YELLOW)🚀 Starting$(NC) ["; \
		printf "%0.s█" $$(seq 1 $$bars); \
		printf "%0.s " $$(seq 1 $$spaces); \
		printf "] "; \
		spinner=("⠋" "⠙" "⠹" "⠸" "⠼" "⠴" "⠦" "⠧" "⠇" "⠏"); \
		idx=$$((i % 10)); \
		printf "$${spinner[idx]}"; \
		sleep 0.1; \
	done; \
	wait $$START_PID
	@printf "\r$(GREEN)   [3/4] ✓ Services started successfully$(NC)                       \n"
	@sleep 0.3
	@echo ""
	@# Step 4: Health check with countdown
	@echo "$(CYAN)   [4/4]$(NC) $(YELLOW)🔍 Waiting for services to be ready...$(NC)"
	@for i in 3 2 1; do \
		printf "\r$(CYAN)   [4/4]$(NC) $(YELLOW)🔍 Health check$(NC) ["; \
		filled=$$((4 - i)); \
		empty=$$i; \
		printf "%0.s█" $$(seq 1 $$filled); \
		printf "%0.s " $$(seq 1 $$empty); \
		printf "] $$i seconds..."; \
		sleep 1; \
	done
	@printf "\r$(GREEN)   [4/4] ✓ All services are healthy and ready!$(NC)                \n"
	@sleep 0.5
	@echo ""
	@echo "$(GREEN)   ╔══════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(GREEN)   ║                                                              ║$(NC)"
	@echo "$(GREEN)   ║              ✅ $(PURPLE)Successfully Started!$(GREEN)                        ║$(NC)"
	@echo "$(GREEN)   ║                                                              ║$(NC)"
	@echo "$(GREEN)   ╚══════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(PURPLE)   📍 Access Your Application:$(NC)"
	@echo ""
	@echo "      $(CYAN)🌐 Frontend:$(NC)   $(GREEN)http://localhost:3000$(NC)"
	@echo "      $(CYAN)⚙️  Backend:$(NC)    $(GREEN)http://localhost:8001/api/$(NC)"
	@echo "      $(CYAN)🔐 Admin:$(NC)       $(GREEN)http://localhost:8001/admin/$(NC)"
	@echo "      $(CYAN)📱 Mini-App:$(NC)    $(GREEN)http://localhost:3001$(NC)"
	@echo ""
	@echo "$(YELLOW)   💡 Quick Commands:$(NC)"
	@echo ""
	@echo "      $(CYAN)make logs$(NC)       - View live logs"
	@echo "      $(CYAN)make down$(NC)       - Stop all services"
	@echo "      $(CYAN)make restart$(NC)    - Restart services"
	@echo "      $(CYAN)make superuser$(NC)  - Create admin user"
	@echo ""
	@echo "$(PURPLE)   ───────────────────────────────────────────────────────────────$(NC)"
	@echo ""



# Stop all services
down:
	@echo ""
	@echo "$(YELLOW)🛑 Stopping KAMOLON E-Commerce...$(NC)"
	@$(DOCKER_COMPOSE) down >/dev/null 2>&1
	@echo "$(GREEN)   ✓ All services stopped!$(NC)"
	@echo ""

# Restart all services
restart:
	@echo ""
	@echo "$(CYAN)🔄 Restarting KAMOLON E-Commerce...$(NC)"
	@$(DOCKER_COMPOSE) restart >/dev/null 2>&1
	@echo "$(GREEN)   ✓ All services restarted!$(NC)"
	@echo ""
	@echo "$(PURPLE)📍 Access URLs:$(NC)"
	@echo "   $(CYAN)Frontend:$(NC)  $(GREEN)http://localhost:3000$(NC)"
	@echo "   $(CYAN)Admin:$(NC)     $(GREEN)http://localhost:8001/admin/$(NC)"
	@echo ""


# View logs
logs:
	@echo "📊 Viewing logs (Ctrl+C to exit)..."
	@$(DOCKER_COMPOSE) logs -f

# Clean everything
clean:
	@echo ""
	@echo "$(RED)   ╔══════════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(RED)   ║                                                              ║$(NC)"
	@echo "$(RED)   ║              🧹 $(YELLOW)Cleaning Everything...$(RED)                        ║$(NC)"
	@echo "$(RED)   ║                                                              ║$(NC)"
	@echo "$(RED)   ╚══════════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(YELLOW)   ⚠️  This will remove:$(NC)"
	@echo "      - All containers"
	@echo "      - All volumes (database data)"
	@echo "      - All images"
	@echo ""
	@$(DOCKER_COMPOSE) down -v --rmi all --remove-orphans >/tmp/clean.log 2>&1 & \
	CLEAN_PID=$$!; \
	i=0; \
	while kill -0 $$CLEAN_PID 2>/dev/null; do \
		i=$$((i + 1)); \
		bars=$$((i % 20)); \
		spaces=$$((20 - bars)); \
		printf "\r$(YELLOW)   🧹 Cleaning$(NC) ["; \
		printf "%0.s█" $$(seq 1 $$bars); \
		printf "%0.s " $$(seq 1 $$spaces); \
		printf "] "; \
		spinner=("⠋" "⠙" "⠹" "⠸" "⠼" "⠴" "⠦" "⠧" "⠇" "⠏"); \
		idx=$$((i % 10)); \
		printf "$${spinner[idx]}"; \
		sleep 0.1; \
	done; \
	wait $$CLEAN_PID
	@printf "\r$(GREEN)   ✓ Cleanup complete!                                    $(NC)\n"
	@echo ""


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

