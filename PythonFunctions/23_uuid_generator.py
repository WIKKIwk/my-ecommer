"""UUID and ID generation"""
import uuid


def generate_uuid4() -> str:
    """Generate UUID4"""
    return str(uuid.uuid4())


def generate_uuid1() -> str:
    """Generate UUID1"""
    return str(uuid.uuid1())


def generate_short_id(length: int = 8) -> str:
    """Generate short random ID"""
    import random
    import string
    chars = string.ascii_lowercase + string.digits
    return ''.join(random.choices(chars, k=length))
