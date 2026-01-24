"""Dictionary utility functions"""


def merge_dicts(*dicts):
    """Merge multiple dictionaries"""
    result = {}
    for d in dicts:
        result.update(d)
    return result


def invert_dict(d: dict) -> dict:
    """Invert dictionary keys and values"""
    return {v: k for k, v in d.items()}


def filter_dict(d: dict, keys: list) -> dict:
    """Filter dictionary by keys"""
    return {k: v for k, v in d.items() if k in keys}
