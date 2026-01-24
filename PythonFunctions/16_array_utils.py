"""Array manipulation functions"""


def rotate_array(arr: list, k: int) -> list:
    """Rotate array k positions"""
    if not arr:
        return arr
    k = k % len(arr)
    return arr[-k:] + arr[:-k]


def find_max_min(arr: list) -> tuple:
    """Find max and min in array"""
    return (max(arr), min(arr))


def array_sum(arr: list) -> float:
    """Sum array elements"""
    return sum(arr)


def array_product(arr: list) -> float:
    """Product of array elements"""
    result = 1
    for num in arr:
        result *= num
    return result
