# Production Deployment Guide

Bu qo'llanma sizning e-commerce ilovangizni **istalgan serverda** deploy qilish uchun mo'ljallangan.

## Minimal System Requirements

- **OS**: Ubuntu 20.04+ / Debian 11+ / CentOS 8+
- **RAM**: Minimum 2GB (4GB tavsiya etiladi)
- **Disk**: 20GB+ bo'sh joy
- **CPU**: 2 core+ (tavsiya)

## Prerequisites

Serveringizda quyidagilar o'rnatilgan bo'lishi kerak:

```bash
# Docker va Docker Compose o'rnatish (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Docker Compose V2 (agar yo'q bo'lsa)
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

## Quick Start - 1-Bosqichda Deploy

### Variyant 1: Minimal Deploy (HTTP only)

Eng sodda va tez usul - faqat HTTP (80 port):

```bash
# 1. Repositoriyani clone qiling
git clone <your-repo-url> my-ecommerce
cd my-ecommerce

# 2. Production rejimda ishga tushiring
make prod-up
```

Bu kommanda:
- `.env` faylini sozlaydi
- Server IP ni avtomatik aniqlaydi
- Barcha servislarni ishga tushiradi
- Database migration qiladi

Tugagach, brauzerni oching: `http://YOUR_SERVER_IP`

### Variyant 2: HTTPS bilan (Self-signed SSL)

Agar HTTPS kerak bo'lsa (test uchun):

```bash
# 1. Clone repository
git clone <your-repo-url> my-ecommerce
cd my-ecommerce

# 2. Self-signed SSL yaratish
bash generate-ssl.sh

# 3. Production rejimda ishga tushiring
make prod-up
```

HTTPS: `https://YOUR_SERVER_IP` (brauzer ogohlantirish beradi - bu normal, "Advanced" > "Proceed" bosing)

### Variyant 3: Real Domain bilan (Cloudflare Tunnel)

Real HTTPS kerak bo'lsa - **BEPULva eng oson usul**:

```bash
# 1. Cloudflare Tunnel token oling
# https://one.dash.cloudflare.com dan
# Zero Trust > Access > Tunnels > Create tunnel

# 2. Deploy qiling
make prod-up

# Terminal so'rasa:
#  - Domain: my-shop.com (sizning domeningiz)
#  - Cloudflare Token: <tokeningiz>
```

Bu avtomatik HTTPS sozlaydi - sertifikat kerak emas!

## Environment Configuration

### Minimal .env (avtomatik yaratiladi)

```env
DOMAIN_OR_IP=123.45.67.89
DJANGO_SECRET_KEY=your-auto-generated-key
DJANGO_DEBUG=False
```

### To'liq Production .env

Qo'shimcha sozlashlar uchun [.env.example](/.env.example) ni ko'ring:

```env
# SMS Gateway (Eskiz.uz)
ESKIZ_EMAIL=your-email@example.com
ESKIZ_PASSWORD=your-password

# Database (custom qilish uchun)
DATABASE_URL=postgresql://user:pass@db:5432/ecommerce

# CORS
CORS_ALLOWED_ORIGINS=https://yourdomain.com
```

## Architecture Overview

```
┌─────────────────────┐
│   NGINX (Port 80/443)│  ← Kirish nuqtasi
└──────────┬──────────┘
           │
    ┌──────┴──────┬──────────┬─────────┐
    │             │          │         │
┌───▼────┐  ┌────▼───┐  ┌──▼─────┐ ┌─▼──────┐
│Frontend│  │Backend │  │Mini-App│ │ Static │
│:3000   │  │:8001   │  │:3001   │ │ Files  │
└────────┘  └───┬────┘  └────────┘ └────────┘
                │
         ┌──────┴──────┐
         │             │
    ┌────▼──┐    ┌────▼───┐
    │ Postgr│    │ Redis  │
    │ :5432 │    │ :6379  │
    └───────┘    └────────┘
```

## SSL/HTTPS Options

### Option 1: HTTP Only (Default)
- Port 80 da ishlaydi
- SSL sertifikat kerak emas
- Test uchun yaxshi

### Option 2: Self-Signed Certificate
```bash
bash generate-ssl.sh
make prod-up
```
- Port 80 va 443 da ishlaydi
- Brauzer "Not Secure" ko'rsatadi
- Local test uchun

### Option 3: Cloudflare Tunnel (TAVSIYA)
```bash
# Free, real HTTPS, domen bilan
make prod-up
# Token kiriting
```
- Real HTTPS
- Domain ismi
- Bepul
- Firewall kerak emas

### Option 4: Let's Encrypt (Real SSL)
```bash
# Certbot o'rnatish
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com

# Sertifikatlarni copy qiling
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem ./certs/
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem ./certs/
sudo chown $USER:$USER ./certs/*.pem

make prod-up
```

## Common Issues & Solutions

### Issue 1: "Port 80 already in use"

```bash
# Apache/Nginx to'xtatish
sudo systemctl stop apache2
sudo systemctl stop nginx

# Qayta urinish
make prod-up
```

### Issue 2: "Cannot connect to Docker daemon"

```bash
# Docker ishga tushirish
sudo systemctl start docker
sudo systemctl enable docker

# Guruhga qo'shish
sudo usermod -aG docker $USER
newgrp docker
```

### Issue 3: Build xatoligi

```bash
# To'liq tozalash va qayta build
make clean
make prod-up
```

### Issue 4: Database migration xatoligi

```bash
# Manual migration
docker-compose -f docker-compose.production.yml exec backend python manage.py migrate

# Superuser yaratish
docker-compose -f docker-compose.production.yml exec backend python manage.py createsuperuser
```

## Useful Commands

```bash
# Loglarni ko'rish
docker-compose -f docker-compose.production.yml logs -f

# Servislarni to'xtatish
docker-compose -f docker-compose.production.yml down

# Qayta ishga tushirish
docker-compose -f docker-compose.production.yml restart

# Database backup
docker-compose -f docker-compose.production.yml exec db pg_dump -U ecommerce_user ecommerce > backup.sql

# Database restore
cat backup.sql | docker-compose -f docker-compose.production.yml exec -T db psql -U ecommerce_user ecommerce
```

## Production Checklist

- [ ] `.env` da `DJANGO_DEBUG=False`
- [ ] `DJANGO_SECRET_KEY` o'zgartirilgan
- [ ] HTTPS konfiguratsiya qilingan (agar kerak bo'lsa)
- [ ] Database backup sozlangan
- [ ] Firewall rules sozlangan (80, 443 portlar ochiq)
- [ ] CORS sozlamalari to'g'ri
- [ ] Superuser yaratilgan
- [ ] SMS gateway konfiguratsiya qilingan

## Security Notes

1. **Firewall**: Faqat kerakli portlarni oching (80, 443, 22)
   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw allow 22/tcp
   sudo ufw enable
   ```

2. **SSH**: Key-based authentication ishlatish tavsiya etiladi

3. **Database**: Remote connection yopiq (default)

4. **Regular updates**:
   ```bash
   git pull
   make prod-up
   ```

## Monitoring

Loglarni doimiy kuzatish:

```bash
# Barcha servislar
docker-compose -f docker-compose.production.yml logs -f

# Faqat backend
docker-compose -f docker-compose.production.yml logs -f backend

# Faqat nginx
docker-compose -f docker-compose.production.yml logs -f nginx
```

## Support

Agar muammo bo'lsa:
1. Loglarni tekshiring: `docker-compose -f docker-compose.production.yml logs`
2. Container holatini tekshiring: `docker ps -a`
3. GitHub Issues da muammo yarating

---

**Muvaffaqiyatli deploy!** 🚀
