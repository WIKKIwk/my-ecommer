"""Date and time utility functions"""
from datetime import datetime, timedelta


def get_current_timestamp() -> str:
    """Get current timestamp"""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def add_days(date_str: str, days: int) -> str:
    """Add days to date"""
    date = datetime.strptime(date_str, "%Y-%m-%d")
    new_date = date + timedelta(days=days)
    return new_date.strftime("%Y-%m-%d")


def days_between(date1: str, date2: str) -> int:
    """Calculate days between two dates"""
    d1 = datetime.strptime(date1, "%Y-%m-%d")
    d2 = datetime.strptime(date2, "%Y-%m-%d")
    return abs((d2 - d1).days)
