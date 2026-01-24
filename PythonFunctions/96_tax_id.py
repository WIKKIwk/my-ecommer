"""Tax ID utilities"""
import re


def validate_us_ssn(ssn: str) -> bool:
    """Validate US Social Security Number"""
    pattern = r'^\d{3}-\d{2}-\d{4}$|^\d{9}$'
    return bool(re.match(pattern, ssn))


def validate_us_ein(ein: str) -> bool:
    """Validate US Employer Identification Number"""
    pattern = r'^\d{2}-\d{7}$|^\d{9}$'
    return bool(re.match(pattern, ein))


def format_us_ssn(ssn: str) -> str:
    """Format SSN as XXX-XX-XXXX"""
    ssn = re.sub(r'\D', '', ssn)
    if len(ssn) == 9:
        return f"{ssn[:3]}-{ssn[3:5]}-{ssn[5:]}"
    return ssn


def format_us_ein(ein: str) -> str:
    """Format EIN as XX-XXXXXXX"""
    ein = re.sub(r'\D', '', ein)
    if len(ein) == 9:
        return f"{ein[:2]}-{ein[2:]}"
    return ein
