"""Fuzzy matching utilities"""
from difflib import SequenceMatcher


def fuzzy_match(s1: str, s2: str) -> float:
    """Calculate fuzzy match ratio"""
    return SequenceMatcher(None, s1.lower(), s2.lower()).ratio()


def find_best_match(query: str, choices: list) -> tuple:
    """Find best matching string from choices"""
    if not choices:
        return None, 0.0
    
    best_match = None
    best_ratio = 0.0
    
    for choice in choices:
        ratio = fuzzy_match(query, choice)
        if ratio > best_ratio:
            best_ratio = ratio
            best_match = choice
    
    return best_match, best_ratio


def filter_matches(query: str, choices: list, threshold: float = 0.6) -> list:
    """Filter choices by similarity threshold"""
    matches = []
    for choice in choices:
        ratio = fuzzy_match(query, choice)
        if ratio >= threshold:
            matches.append((choice, ratio))
    return sorted(matches, key=lambda x: x[1], reverse=True)
