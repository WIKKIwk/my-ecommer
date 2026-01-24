"""Path utility functions"""
import os


def get_absolute_path(relative_path: str) -> str:
    """Get absolute path"""
    return os.path.abspath(relative_path)


def join_paths(*paths) -> str:
    """Join multiple paths"""
    return os.path.join(*paths)


def get_parent_directory(path: str) -> str:
    """Get parent directory"""
    return os.path.dirname(path)


def path_exists(path: str) -> bool:
    """Check if path exists"""
    return os.path.exists(path)
