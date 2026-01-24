"""Statistical functions"""


def mean(numbers: list) -> float:
    """Calculate mean (average)"""
    return sum(numbers) / len(numbers)


def median(numbers: list) -> float:
    """Calculate median"""
    sorted_nums = sorted(numbers)
    n = len(sorted_nums)
    mid = n // 2
    if n % 2 == 0:
        return (sorted_nums[mid - 1] + sorted_nums[mid]) / 2
    return sorted_nums[mid]


def mode(numbers: list):
    """Calculate mode"""
    from collections import Counter
    counts = Counter(numbers)
    max_count = max(counts.values())
    return [num for num, count in counts.items() if count == max_count]


def variance(numbers: list) -> float:
    """Calculate variance"""
    avg = mean(numbers)
    return sum((x - avg) ** 2 for x in numbers) / len(numbers)
