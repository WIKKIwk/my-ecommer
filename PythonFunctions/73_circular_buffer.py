"""Circular buffer utilities"""


class CircularBuffer:
    """Circular buffer (ring buffer) implementation"""
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.buffer = [None] * capacity
        self.head = 0
        self.tail = 0
        self.size = 0
    
    def is_empty(self) -> bool:
        """Check if buffer is empty"""
        return self.size == 0
    
    def is_full(self) -> bool:
        """Check if buffer is full"""
        return self.size == self.capacity
    
    def write(self, item):
        """Write item to buffer"""
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.capacity
        if self.is_full():
            self.head = (self.head + 1) % self.capacity
        else:
            self.size += 1
    
    def read(self):
        """Read item from buffer"""
        if self.is_empty():
            return None
        item = self.buffer[self.head]
        self.head = (self.head + 1) % self.capacity
        self.size -= 1
        return item
