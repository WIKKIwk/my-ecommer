"""Memory size utilities"""


def bytes_to_human_readable(size_bytes: int) -> str:
    """Convert bytes to human readable format"""
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.2f} PB"


def human_readable_to_bytes(size_str: str) -> int:
    """Convert human readable to bytes"""
    units = {'B': 1, 'KB': 1024, 'MB': 1024**2, 'GB': 1024**3, 'TB': 1024**4}
    size, unit = size_str.split()
    return int(float(size) * units[unit.upper()])
