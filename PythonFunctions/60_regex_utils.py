"""Regular expression utilities"""
import re


def extract_emails(text: str) -> list:
    """Extract all email addresses from text"""
    pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    return re.findall(pattern, text)


def extract_urls(text: str) -> list:
    """Extract all URLs from text"""
    pattern = r'https?://[^\s]+'
    return re.findall(pattern, text)


def extract_phone_numbers(text: str) -> list:
    """Extract phone numbers from text"""
    pattern = r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b'
    return re.findall(pattern, text)


def replace_pattern(text: str, pattern: str, replacement: str) -> str:
    """Replace all occurrences of pattern"""
    return re.sub(pattern, replacement, text)


def split_by_pattern(text: str, pattern: str) -> list:
    """Split text by pattern"""
    return re.split(pattern, text)
