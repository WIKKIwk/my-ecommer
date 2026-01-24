"""Binary search tree utilities"""


class BSTNode:
    """Binary search tree node"""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BST:
    """Binary search tree"""
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        """Insert value into BST"""
        if not self.root:
            self.root = BSTNode(value)
        else:
            self._insert_recursive(self.root, value)
    
    def _insert_recursive(self, node, value):
        """Recursive insert helper"""
        if value < node.value:
            if node.left is None:
                node.left = BSTNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = BSTNode(value)
            else:
                self._insert_recursive(node.right, value)
    
    def search(self, value) -> bool:
        """Search for value in BST"""
        return self._search_recursive(self.root, value)
    
    def _search_recursive(self, node, value):
        """Recursive search helper"""
        if node is None:
            return False
        if node.value == value:
            return True
        if value < node.value:
            return self._search_recursive(node.left, value)
        return self._search_recursive(node.right, value)
