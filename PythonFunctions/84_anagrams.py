"""Anagram utilities"""
from collections import Counter


def is_anagram(s1: str, s2: str) -> bool:
    """Check if two strings are anagrams"""
    return Counter(s1.lower()) == Counter(s2.lower())


def find_anagrams(word: str, word_list: list) -> list:
    """Find all anagrams of word in list"""
    word_counter = Counter(word.lower())
    return [w for w in word_list if Counter(w.lower()) == word_counter]


def group_anagrams(words: list) -> list:
    """Group words by anagrams"""
    anagram_dict = {}
    
    for word in words:
        key = ''.join(sorted(word.lower()))
        if key in anagram_dict:
            anagram_dict[key].append(word)
        else:
            anagram_dict[key] = [word]
    
    return list(anagram_dict.values())
