"""Weighted random selection"""
import random


def weighted_choice(choices: list, weights: list):
    """Select item based on weights"""
    total = sum(weights)
    r = random.uniform(0, total)
    cumulative = 0
    
    for choice, weight in zip(choices, weights):
        cumulative += weight
        if r <= cumulative:
            return choice
    return choices[-1]


def weighted_sample(choices: list, weights: list, k: int) -> list:
    """Select k items based on weights (without replacement)"""
    if k > len(choices):
        k = len(choices)
    
    result = []
    remaining_choices = list(choices)
    remaining_weights = list(weights)
    
    for _ in range(k):
        choice = weighted_choice(remaining_choices, remaining_weights)
        idx = remaining_choices.index(choice)
        result.append(choice)
        remaining_choices.pop(idx)
        remaining_weights.pop(idx)
    
    return result
