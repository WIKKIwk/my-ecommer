"""Stack utilities"""


class Stack:
    """Stack implementation"""
    def __init__(self):
        self._items = []
    
    def push(self, item):
        """Push item onto stack"""
        self._items.append(item)
    
    def pop(self):
        """Pop item from stack"""
        if not self.is_empty():
            return self._items.pop()
        return None
    
    def peek(self):
        """Peek at top item"""
        if not self.is_empty():
            return self._items[-1]
        return None
    
    def is_empty(self):
        """Check if stack is empty"""
        return len(self._items) == 0
    
    def size(self):
        """Get stack size"""
        return len(self._items)


def is_balanced_parentheses(expression: str) -> bool:
    """Check if parentheses are balanced"""
    stack = Stack()
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in expression:
        if char in pairs:
            stack.push(char)
        elif char in pairs.values():
            if stack.is_empty() or pairs[stack.pop()] != char:
                return False
    
    return stack.is_empty()
