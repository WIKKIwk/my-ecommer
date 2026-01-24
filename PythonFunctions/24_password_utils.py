"""Password utilities"""
import string
import random


def generate_password(length: int = 12, include_special: bool = True) -> str:
    """Generate random password"""
    chars = string.ascii_letters + string.digits
    if include_special:
        chars += string.punctuation
    return ''.join(random.choices(chars, k=length))


def check_password_strength(password: str) -> dict:
    """Check password strength"""
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in string.punctuation for c in password)
    length_ok = len(password) >= 8
    
    score = sum([has_upper, has_lower, has_digit, has_special, length_ok])
    strength = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][score]
    
    return {'strength': strength, 'score': score}
