"""Color utility functions"""


def rgb_to_hex(r: int, g: int, b: int) -> str:
    """Convert RGB to hex color"""
    return f"#{r:02x}{g:02x}{b:02x}"


def hex_to_rgb(hex_color: str) -> tuple:
    """Convert hex to RGB color"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def lighten_color(hex_color: str, percent: float) -> str:
    """Lighten hex color by percent"""
    r, g, b = hex_to_rgb(hex_color)
    r = min(255, int(r + (255 - r) * percent))
    g = min(255, int(g + (255 - g) * percent))
    b = min(255, int(b + (255 - b) * percent))
    return rgb_to_hex(r, g, b)
