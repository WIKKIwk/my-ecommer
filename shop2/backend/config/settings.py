"""Django settings for Shop2"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.getenv('SECRET_KEY', 'django-insecure-dev-key')
DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']
