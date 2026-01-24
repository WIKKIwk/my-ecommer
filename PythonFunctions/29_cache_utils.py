"""Cache utilities"""
from functools import lru_cache, wraps
import pickle
import os


@lru_cache(maxsize=128)
def cached_function(arg):
    """Example cached function"""
    return arg * 2


def file_cache(cache_file: str):
    """File-based cache decorator"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if os.path.exists(cache_file):
                with open(cache_file, 'rb') as f:
                    return pickle.load(f)
            result = func(*args, **kwargs)
            with open(cache_file, 'wb') as f:
                pickle.dump(result, f)
            return result
        return wrapper
    return decorator
