"""Number formatting utilities"""


def format_number(num: float, decimals: int = 2) -> str:
    """Format number with decimals"""
    return f"{num:.{decimals}f}"


def format_currency(amount: float, symbol: str = "$") -> str:
    """Format as currency"""
    return f"{symbol}{amount:,.2f}"


def format_percentage(value: float) -> str:
    """Format as percentage"""
    return f"{value:.2f}%"


def add_thousand_separator(num: int) -> str:
    """Add thousand separator"""
    return f"{num:,}"
