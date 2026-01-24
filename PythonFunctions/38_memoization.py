"""Memoization utilities"""
from functools import wraps


def memoize(func):
    """Memoization decorator"""
    cache = {}
    
    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    
    wrapper.cache = cache
    return wrapper


@memoize
def fibonacci_memo(n: int) -> int:
    """Memoized Fibonacci"""
    if n <= 1:
        return n
    return fibonacci_memo(n - 1) + fibonacci_memo(n - 2)
