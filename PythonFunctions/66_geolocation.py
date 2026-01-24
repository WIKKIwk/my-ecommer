"""Geolocation utilities"""
import math


def distance_between_coordinates(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Calculate distance in km using Haversine formula"""
    R = 6371  # Earth radius in km
    
    lat1_rad = math.radians(lat1)
    lat2_rad = math.radians(lat2)
    delta_lat = math.radians(lat2 - lat1)
    delta_lon = math.radians(lon2 - lon1)
    
    a = math.sin(delta_lat/2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(delta_lon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    
    return R * c


def is_point_in_radius(center_lat: float, center_lon: float, point_lat: float, point_lon: float, radius_km: float) -> bool:
    """Check if point is within radius of center"""
    distance = distance_between_coordinates(center_lat, center_lon, point_lat, point_lon)
    return distance <= radius_km
