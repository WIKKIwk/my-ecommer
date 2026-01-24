"""URL utility functions"""
from urllib.parse import urlparse, parse_qs, urlencode


def parse_url(url: str) -> dict:
    """Parse URL into components"""
    parsed = urlparse(url)
    return {
        'scheme': parsed.scheme,
        'domain': parsed.netloc,
        'path': parsed.path,
        'query': parsed.query,
        'fragment': parsed.fragment
    }


def get_query_params(url: str) -> dict:
    """Extract query parameters from URL"""
    parsed = urlparse(url)
    return parse_qs(parsed.query)


def build_url(base: str, params: dict) -> str:
    """Build URL with query parameters"""
    query_string = urlencode(params)
    return f"{base}?{query_string}"
