"""Base64 encoding utilities"""
import base64


def encode_base64(text: str) -> str:
    """Encode string to Base64"""
    return base64.b64encode(text.encode()).decode()


def decode_base64(encoded: str) -> str:
    """Decode Base64 to string"""
    return base64.b64decode(encoded.encode()).decode()


def encode_file_base64(filepath: str) -> str:
    """Encode file to Base64"""
    with open(filepath, 'rb') as f:
        return base64.b64encode(f.read()).decode()
