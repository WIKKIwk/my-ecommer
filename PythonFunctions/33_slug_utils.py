"""Slug utilities"""
import re


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def deslugify(slug: str) -> str:
    """Convert slug back to readable text"""
    return slug.replace('-', ' ').title()
