"""Singleton pattern utility"""


class Singleton:
    """Singleton metaclass"""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]


class SingletonExample(metaclass=Singleton):
    """Example singleton class"""
    def __init__(self):
        self.value = 0


def singleton(cls):
    """Singleton decorator"""
    instances = {}
    
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    
    return get_instance
