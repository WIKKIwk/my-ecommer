"""ISBN utilities"""


def validate_isbn10(isbn: str) -> bool:
    """Validate ISBN-10"""
    isbn = isbn.replace('-', '').replace(' ', '')
    if len(isbn) != 10:
        return False
    
    total = 0
    for i in range(9):
        if not isbn[i].isdigit():
            return False
        total += int(isbn[i]) * (10 - i)
    
    check = isbn[9]
    if check == 'X':
        total += 10
    elif check.isdigit():
        total += int(check)
    else:
        return False
    
    return total % 11 == 0


def validate_isbn13(isbn: str) -> bool:
    """Validate ISBN-13"""
    isbn = isbn.replace('-', '').replace(' ', '')
    if len(isbn) != 13 or not isbn.isdigit():
        return False
    
    total = sum(int(isbn[i]) * (1 if i % 2 == 0 else 3) for i in range(12))
    check = (10 - (total % 10)) % 10
    
    return int(isbn[12]) == check
