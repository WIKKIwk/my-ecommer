"""Hamming distance utilities"""


def hamming_distance(s1: str, s2: str) -> int:
    """Calculate Hamming distance between equal-length strings"""
    if len(s1) != len(s2):
        raise ValueError("Strings must be equal length")
    return sum(c1 != c2 for c1, c2 in zip(s1, s2))


def hamming_distance_binary(n1: int, n2: int) -> int:
    """Hamming distance between binary representations"""
    xor = n1 ^ n2
    count = 0
    while xor:
        count += xor & 1
        xor >>= 1
    return count


def hamming_weight(n: int) -> int:
    """Count set bits (Hamming weight)"""
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count
