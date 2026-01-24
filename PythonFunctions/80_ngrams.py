"""N-gram utilities"""
from collections import Counter


def generate_ngrams(text: str, n: int) -> list:
    """Generate n-grams from text"""
    words = text.split()
    return [tuple(words[i:i+n]) for i in range(len(words)-n+1)]


def char_ngrams(text: str, n: int) -> list:
    """Generate character n-grams"""
    return [text[i:i+n] for i in range(len(text)-n+1)]


def ngram_frequency(text: str, n: int) -> dict:
    """Get n-gram frequency distribution"""
    ngrams = generate_ngrams(text, n)
    return dict(Counter(ngrams))


def most_common_ngrams(text: str, n: int, top_k: int = 10) -> list:
    """Get most common n-grams"""
    ngrams = generate_ngrams(text, n)
    return Counter(ngrams).most_common(top_k)
