"""Zip and compression utilities"""
import zipfile
import os


def create_zip(files: list, zip_name: str):
    """Create zip archive from files"""
    with zipfile.ZipFile(zip_name, 'w') as zipf:
        for file in files:
            zipf.write(file, os.path.basename(file))


def extract_zip(zip_path: str, extract_to: str = '.'):
    """Extract zip archive"""
    with zipfile.ZipFile(zip_path, 'r') as zipf:
        zipf.extractall(extract_to)


def list_zip_contents(zip_path: str) -> list:
    """List contents of zip file"""
    with zipfile.ZipFile(zip_path, 'r') as zipf:
        return zipf.namelist()
