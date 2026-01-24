"""Math utility functions"""
import math


def factorial(n: int) -> int:
    """Calculate factorial"""
    return math.factorial(n)


def gcd(a: int, b: int) -> int:
    """Greatest common divisor"""
    return math.gcd(a, b)


def is_prime(n: int) -> bool:
    """Check if number is prime"""
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
