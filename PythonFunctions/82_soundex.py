"""Soundex algorithm"""


def soundex(word: str) -> str:
    """Generate Soundex code for word"""
    word = word.upper()
    soundex_code = word[0]
    
    # Soundex mapping
    mapping = {
        'BFPV': '1', 'CGJKQSXZ': '2', 'DT': '3',
        'L': '4', 'MN': '5', 'R': '6'
    }
    
    for char in word[1:]:
        for key, value in mapping.items():
            if char in key:
                if soundex_code[-1] != value:
                    soundex_code += value
                break
    
    # Remove vowels
    soundex_code = soundex_code.replace('A', '').replace('E', '').replace('I', '')
    soundex_code = soundex_code.replace('O', '').replace('U', '').replace('H', '').replace('W', '').replace('Y', '')
    
    # Pad or truncate to 4 characters
    soundex_code = (soundex_code + '000')[:4]
    
    return soundex_code


def are_homophones(word1: str, word2: str) -> bool:
    """Check if words sound similar"""
    return soundex(word1) == soundex(word2)
