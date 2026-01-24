"""Event emitter pattern"""


class EventEmitter:
    """Simple event emitter"""
    def __init__(self):
        self._events = {}
    
    def on(self, event: str, handler):
        """Register event handler"""
        if event not in self._events:
            self._events[event] = []
        self._events[event].append(handler)
    
    def off(self, event: str, handler):
        """Unregister event handler"""
        if event in self._events:
            self._events[event].remove(handler)
    
    def emit(self, event: str, *args, **kwargs):
        """Emit event"""
        if event in self._events:
            for handler in self._events[event]:
                handler(*args, **kwargs)
    
    def once(self, event: str, handler):
        """Register one-time event handler"""
        def wrapper(*args, **kwargs):
            handler(*args, **kwargs)
            self.off(event, wrapper)
        self.on(event, wrapper)
