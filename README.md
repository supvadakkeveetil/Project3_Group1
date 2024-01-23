# Project3_Group1
## Wildfire Data Visualization: Understanding Wildfire Occurrences in California, USA

### Objective
The primary aim of this project is to develop an interactive and comprehensive data visualization that effectively communicates the trends, patterns, and key insights derived from wildfire occurrences in California spanning from 2000 to 2020. We also look at the Fire Hazard Severity Zones in California and the facilities for Wildland Fire Protection available in the state of California. This visualization will serve as a valuable resource for stakeholders, researchers, and the public to comprehend the frequency, geographic distribution, causes, and impacts of wildfires.

### Tools
The following tools were used to build this project
•	Python 
•	Geopandas
•	JavaScript
•	CSS
•	HTML
•	MongoDB

### Process
#### 1. Data Collection or discovery
The data for wildfire visualization was collected from reliable sources such as USGS, CAFire.gov, Research Papers.
-	Wildfire data for United States (Period 1992-2020)
-	Fire Hazard Severity Zones data
-	Wildland Fire Facilities data 

#### 2. Data Cleaning
1.	Converting the required data from SQLite, Shapefiles to Geojson and CSV format 
2.	Removing unnecessary data. Filtering data for just California and for a certain period 
3.	Checking the structure of data and ensuring it was in the right format.

#### 3. Data Visualizations
-	Create comparative visualizations to highlight the variations in wildfire occurrences over the years
-	Look at the distribution of fire stations around the severely affected /prone areas 
-	Offer contextual information on factors contributing to wildfires, such as Natural or Human Causes

#### 4. Final Vizualizations
1.	Link to Wildfires HTML page

#### Code Files:
1.	Wildfires_sort.ipynb – Geojson and CSV files from SQLite
2.	FireFac.ipynb – Geojson from Shape files using Geopandas
3.	MongoDB_setup.ipynb – Loading Wildfire data into the MongoDB
4.	Wildfire Visualization folder – Java script and HTML files for generating the Interactive Leaflet Map which shows the Wildfire Hazard Zones and Fire facilities located.
5.	Fire_Map – Java script and HTML files that show the Fires over the years 2000-2020
6.	Bar_chart – The code for generating bar charts of the Top 20 largest wildfires and causes

#### References
1. US Department of Agriculture – Research Archive: Link: https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.6;(Short, Karen C. 2022. Spatial wildfire occurrence data for the United States, 1992-2020 [FPA_FOD_20221014]. 6th Edition. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2013-0009.6)
2. CA. Gov Fire Hazard Severity Zone data, Link: https://data.ca.gov/dataset/fhsz-in-sra
3. CA. Gov California Fire Facilities for Wildland Fire Protection, Link: https://data.ca.gov/dataset/cal-fire-facilities-for-wildland-fire-protection
4. Leaflet Library
5. Bar chart - https://d3-graph-gallery.com/graph/barplot_horizontal.html

##### Acknowledgements:
Leonard Paul-Kamara
Natural Chan 

###### Team Members:
Supriya Vadakkeveetil, Jesse Reeves, Aditya Saini

