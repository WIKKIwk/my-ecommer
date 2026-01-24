"""Vigenère cipher utilities"""


def vigenere_encrypt(text: str, key: str) -> str:
    """Vigenère cipher encryption"""
    key = key.upper()
    result = ""
    key_index = 0
    
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            shift = ord(key[key_index % len(key)]) - 65
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
            key_index += 1
        else:
            result += char
    
    return result


def vigenere_decrypt(ciphertext: str, key: str) -> str:
    """Vigenère cipher decryption"""
    key = key.upper()
    result = ""
    key_index = 0
    
    for char in ciphertext:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            shift = ord(key[key_index % len(key)]) - 65
            result += chr((ord(char) - ascii_offset - shift) % 26 + ascii_offset)
            key_index += 1
        else:
            result += char
    
    return result
