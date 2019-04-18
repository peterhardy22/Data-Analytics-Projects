# Pittsburgh_Crime_project

Dependancies instructions for Liam's heatmaps

Download and install GDAL-2.4.0.win-amd64-py3.7.msi and gdal-204-1911-x64-core.msi (windows only)

In environment variables, create 3 new paths:

GDAL_DATA, C:\Program Files\GDAL\gdal-data

GDAL_DRIVER_PATH, C:\Program Files\GDAL\gdalplugins

GDAL_VERSION, 2.4.0

In bash, use:
conda install -c conda-forge folium

conda install -c conda-forge fiona shapely pyproj rtree

conda install -c conda-forge geopandas
