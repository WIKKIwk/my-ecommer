"""LRU Cache implementation"""
from collections import OrderedDict


class LRUCache:
    """Least Recently Used Cache"""
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        """Get value by key"""
        if key not in self.cache:
            return None
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        """Put key-value pair"""
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)
    
    def  size(self):
        """Get cache size"""
        return len(self.cache)
    
    def clear(self):
        """Clear cache"""
        self.cache.clear()
