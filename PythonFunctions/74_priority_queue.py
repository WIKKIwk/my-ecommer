"""Priority task queue"""
import heapq
from dataclasses import dataclass, field
from typing import Any


@dataclass(order=True)
class PriorityTask:
    """Task with priority"""
    priority: int
    item: Any = field(compare=False)


class PriorityTaskQueue:
    """Priority-based task queue"""
    def __init__(self):
        self._queue = []
        self._index = 0
    
    def push(self, item: Any, priority: int):
        """Add task with priority (lower = higher priority)"""
        heapq.heappush(self._queue, PriorityTask(priority, item))
        self._index += 1
    
    def pop(self) -> Any:
        """Remove and return highest priority task"""
        if self._queue:
            return heapq.heappop(self._queue).item
        return None
    
    def peek(self) -> Any:
        """View highest priority task without removing"""
        if self._queue:
            return self._queue[0].item
        return None
    
    def is_empty(self) -> bool:
        """Check if queue is empty"""
        return len(self._queue) == 0
