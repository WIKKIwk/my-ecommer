"""Atbash cipher utilities"""


def atbash_encrypt(text: str) -> str:
    """Atbash cipher (reverse alphabet)"""
    result = ""
    
    for char in text:
        if char.isalpha():
            if char.isupper():
                result += chr(90 - (ord(char) - 65))
            else:
                result += chr(122 - (ord(char) - 97))
        else:
            result += char
    
    return result


def atbash_decrypt(ciphertext: str) -> str:
    """Atbash decrypt (same as encrypt)"""
    return atbash_encrypt(ciphertext)
