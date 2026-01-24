"""Debounce and throttle utilities"""
import time
from functools import wraps


def debounce(wait: float):
    """Debounce decorator"""
    def decorator(func):
        last_called = [0]
        
        @wraps(func)
        def wrapper(*args, **kwargs):
            current_time = time.time()
            if current_time - last_called[0] >= wait:
                last_called[0] = current_time
                return func(*args, **kwargs)
        return wrapper
    return decorator


def throttle(wait: float):
    """Throttle decorator"""
    def decorator(func):
        last_called = [0]
        
        @wraps(func)
        def wrapper(*args, **kwargs):
            current_time = time.time()
            if current_time - last_called[0] >= wait:
                last_called[0] = current_time
                return func(*args, **kwargs)
        return wrapper
    return decorator
