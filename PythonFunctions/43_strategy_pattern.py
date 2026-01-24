"""Strategy pattern utilities"""


class Strategy:
    """Base strategy class"""
    def execute(self, data):
        """Execute strategy"""
        raise NotImplementedError


class SortAscending(Strategy):
    """Sort ascending strategy"""
    def execute(self, data):
        return sorted(data)


class SortDescending(Strategy):
    """Sort descending strategy"""
    def execute(self, data):
        return sorted(data, reverse=True)


class Context:
    """Context for strategy pattern"""
    def __init__(self, strategy: Strategy):
        self._strategy = strategy
    
    def set_strategy(self, strategy: Strategy):
        """Set new strategy"""
        self._strategy = strategy
    
    def execute_strategy(self, data):
        """Execute current strategy"""
        return self._strategy.execute(data)
