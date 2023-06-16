#!/usr/bin/python
from bing_image_downloader import downloader

while True:
    query_string = input("Enter a term: ")
    downloader.download(query_string, limit=1, output_dir='.', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)
