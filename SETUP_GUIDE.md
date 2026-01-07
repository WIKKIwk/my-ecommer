# Complete Setup Guide

## 🎯 Quick Setup (Recommended)

The easiest way to get started:

```bash
# 1. Clone the repository
git clone https://github.com/WIKKIwk/Ecommer_web.git
cd Ecommer_web

# 2. Run automated setup
make setup

# 3. Create admin user
make superuser
```

Visit <http://localhost:3000> - Done! 🎉

---

## 📋 What Happens During Setup

The `make setup` command automatically:

1. ✅ Runs `setup.sh` to generate secure credentials
2. ✅ Creates all `.env` files with proper configuration
3. ✅ Builds Docker containers (first time only)
4. ✅ Starts all services (PostgreSQL, Backend, Frontend, Mini-App, Nginx)
5. ✅ Runs database migrations
6. ✅ Collects Django static files
7. ✅ Applies the admin panel UI fix

**Total time**: 2-3 minutes (first run), ~30 seconds (subsequent runs)

---

## 🔧 Manual Setup (Advanced)

If you prefer manual configuration or auto-setup fails:

### Step 1: Environment Files

Create backend `.env`:

```bash
cp .env.example .env
```

Edit `.env` and set:

- `DJANGO_SECRET_KEY`: Generate with `python3 -c 'import secrets; print(secrets.token_urlsafe(50))'`
- `DATABASE_URL`: Keep default for development

Create frontend environment:

```bash
cp frontend/.env.example frontend/.env.local
```

Create mini-app environment:

```bash
cp mini-app/.env.example mini-app/.env
```

### Step 2: Start Services

```bash
docker compose up -d --build
```

### Step 3: Database Setup

```bash
docker compose exec backend python manage.py migrate
docker compose exec backend python manage.py collectstatic --noinput
docker compose exec backend python manage.py createsuperuser
```

---

## 🌐 Access URLs

After setup, access:

- **Frontend (User App)**: <http://localhost:3000>
- **Backend API**: <http://localhost:8001/api/>
- **Admin Panel**: <http://localhost:8001/admin/>
- **Mini-App (Telegram)**: <http://localhost:3001>

---

## 👤 Admin Panel

The admin panel uses **Django Unfold** - a modern, beautiful admin interface.

**Login Credentials** (after running `make superuser`):

- URL: <http://localhost:8001/admin/>
- Username: (what you entered)
- Password: (what you entered)

The admin panel includes:

- Products & Categories management
- Orders & Cart management
- Customer data
- Branch/Store management
- Hero banners
- Payment gateway settings

---

## 🐛 Troubleshooting

### Containers Won't Start

```bash
# Stop everything
make down

# Clean and restart
make clean
make setup
```

### Port Already in Use

Check what's using the port:

```bash
sudo lsof -i :8001  # or :3000, :3001
```

Kill the process:

```bash
sudo kill -9 <PID>
```

Or change ports in `docker-compose.yml`

### Database Connection Issues

```bash
# Check database status
docker compose logs db

# Restart database
docker compose restart db

# If needed, recreate everything
make clean
make setup
```

### Admin Panel UI Not Loading (Broken HTML)

This should be fixed automatically by `make setup`. If you still see broken HTML:

```bash
# The fix is already in config/urls.py
# Just restart backend
docker compose restart backend
```

### Static Files 404

```bash
# Recollect static files
docker compose exec backend python manage.py collectstatic --noinput
docker compose restart backend
```

---

## 🔄 Useful Commands

```bash
make menu         # Interactive menu
make help         # Show all commands
make logs         # View logs
make restart      # Restart all services
make down         # Stop all services
make clean        # Remove everything
make migrate      # Run migrations
make superuser    # Create admin user
```

---

## 📦 Requirements

- **Docker** & **Docker Compose**
- **Python 3** (for setup.sh)
- **OpenSSL** (for generating secure passwords)
- **2GB+ RAM**
- **10GB+ disk space**

### Install on Ubuntu/Debian

```bash
sudo apt update
sudo apt install docker.io docker-compose python3 openssl
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

Log out and back in for group changes to take effect.

### Install on macOS

```bash
brew install docker docker-compose python openssl
```

---

## 🚀 Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment instructions.

Quick production setup:

```bash
# On your server
git clone https://github.com/WIKKIwk/Ecommer_web.git
cd Ecommer_web

# Edit .env for production
cp .env.production .env
nano .env  # Set DEBUG=False, update ALLOWED_HOSTS, etc.

# Deploy
make deploy
```

---

## 💡 Tips

- Default SMS OTP code in development: `1111`
- Database data persists in Docker volumes
- Use `make logs` to debug issues
- Check browser console for frontend errors
- Backend logs: `docker compose logs backend`

---

## 📞 Support

Having issues? Check:

- [README.md](README.md) - Full documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment
- GitHub Issues - Report bugs

---

**Happy coding!** 🚀
