"""CRC utilities"""


def crc8(data: bytes) -> int:
    """Calculate CRC-8"""
    crc = 0
    
    for byte in data:
        crc ^= byte
        for _ in range(8):
            if crc & 0x80:
                crc = (crc << 1) ^ 0x07
            else:
                crc <<= 1
            crc &= 0xFF
    
    return crc


def crc16(data: bytes) -> int:
    """Calculate CRC-16 (CCITT)"""
    crc = 0xFFFF
    
    for byte in data:
        crc ^= byte << 8
        for _ in range(8):
            if crc & 0x8000:
                crc = (crc << 1) ^ 0x1021
            else:
                crc <<= 1
            crc &= 0xFFFF
    
    return crc
