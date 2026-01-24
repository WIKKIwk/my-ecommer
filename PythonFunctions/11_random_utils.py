"""Random utility functions"""
import random
import string


def generate_random_string(length: int = 10) -> str:
    """Generate random string"""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))


def generate_random_number(min_val: int = 0, max_val: int = 100) -> int:
    """Generate random number in range"""
    return random.randint(min_val, max_val)


def shuffle_list(lst: list) -> list:
    """Shuffle list randomly"""
    shuffled = lst.copy()
    random.shuffle(shuffled)
    return shuffled
