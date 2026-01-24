"""Cron expression utilities"""
from datetime import datetime, timedelta


def parse_cron_minute(expr: str) -> list:
    """Parse cron minute expression"""
    if expr == '*':
        return list(range(60))
    if '/' in expr:
        _, step = expr.split('/')
        return list(range(0, 60, int(step)))
    if '-' in expr:
        start, end = map(int, expr.split('-'))
        return list(range(start, end + 1))
    return [int(expr)]


def next_run_time(cron_minute: str, now: datetime = None) -> datetime:
    """Get next run time for simple minute-based cron"""
    if now is None:
        now = datetime.now()
    
    valid_minutes = parse_cron_minute(cron_minute)
    current_minute = now.minute
    
    # Find next valid minute
    for minute in valid_minutes:
        if minute > current_minute:
            return now.replace(minute=minute, second=0, microsecond=0)
    
    # Next hour
    next_hour = now + timedelta(hours=1)
    return next_hour.replace(minute=valid_minutes[0], second=0, microsecond=0)
