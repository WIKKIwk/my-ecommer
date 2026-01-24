"""Checksum utilities"""


def simple_checksum(data: bytes) -> int:
    """Calculate simple checksum"""
    return sum(data) % 256


def fletcher16(data: bytes) -> int:
    """Fletcher-16 checksum"""
    sum1 = 0
    sum2 = 0
    
    for byte in data:
        sum1 = (sum1 + byte) % 255
        sum2 = (sum2 + sum1) % 255
    
    return (sum2 << 8) | sum 1


def luhn_checksum(number: str) -> int:
    """Luhn algorithm checksum digit"""
    def digits_of(n):
        return [int(d) for d in str(n)]
    
    digits = digits_of(number)
    odd_digits = digits[-1::-2]
    even_digits = digits[-2::-2]
    total = sum(odd_digits)
    
    for d in even_digits:
        total += sum(digits_of(d * 2))
    
    return (10 - (total % 10)) % 10
