"""XML parsing utilities"""
import xml.etree.ElementTree as ET


def parse_xml_file(filepath: str) -> ET.Element:
    """Parse XML file"""
    tree = ET.parse(filepath)
    return tree.getroot()


def parse_xml_string(xml_string: str) -> ET.Element:
    """Parse XML string"""
    return ET.fromstring(xml_string)


def xml_to_dict(element: ET.Element) -> dict:
    """Convert XML element to dictionary"""
    result = {element.tag: {}}
    for child in element:
        child_dict = xml_to_dict(child)
        result[element.tag].update(child_dict)
    if element.text and element.text.strip():
        result[element.tag] = element.text
    return result
