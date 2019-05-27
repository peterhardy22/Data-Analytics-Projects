# Dependencies
import pandas as pd
import requests as rs
from bs4 import BeautifulSoup as bs
from splinter import Browser
from splinter.exceptions import ElementDoesNotExist


def init_browser():
 # @NOTE: Replace the path with your actual path to the chromedriver
 executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
 return Browser("chrome", **executable_path, headless=False)


def scrape():
 browser = init_browser()

 # NASA Mars News
 # Open NASA Mars News Website
 mars_news_url = 'https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest'
 browser.visit(mars_news_url)

 # Create BeautifulSoup object; parse with 'html.parser'
 mars_news_html = browser.html
 mars_news = bs(mars_news_html, 'html.parser')

 # Create variables to hold news title and news paragraph text
 news_title = mars_news.find('div', class_='content_title').text
 news_p = mars_news.find('div', class_='rollover_description_inner').text


 # JPL Mars Space Images - Featured Image
 # Open JPL Website
 jpl_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
 browser.visit(jpl_url)

 # Create BeautifulSoup object; parse with 'html.parser'
 jpl_html = browser.html
 jpl_soup = bs(jpl_html, 'html.parser')

 # Create variable to hold url for full size featured image
 image_url = jpl_soup.find('a', {'id': 'full_image', 'data-fancybox-href': True}).get('data-fancybox-href')

 # Loop through all the hrefs of the url
 links = []
 for link in jpl_soup.find_all('a'):
     links.append(link.get('href'))

 # Correct href is 2nd item in the list 
 jpl_link = links[1].strip('/')

 # Create variable to hold complete url for featured image
 featured_image_url = "https://" + jpl_link + image_url


 # Mars Weather
 # Open Mars Weather Twitter Website
 twitter_url = "https://twitter.com/marswxreport?lang=en"
 browser.visit(twitter_url)

 # Create BeautifulSoup object; parse with 'html.parser'
 twitter_html = browser.html
 twitter_soup = bs(twitter_html, 'html.parser')

 # Create variable to hold raw weather info text
 text_container = twitter_soup.find('div', class_="js-tweet-text-container")
 weather = text_container.find('p').text.strip()
 link = text_container.find('p').find('a').text.strip()
 weather = weather.replace(link, '')

 # Create variable to hold clean weather info text
 mars_weather = weather.replace('\n', '')


 # Mars Facts
 # Open Mars Facts Website
 facts_url = "https://space-facts.com/mars/"

 # Create variable to store html list
 fact_list = pd.read_html(facts_url)

 # Convert fact_list to Pandas DataFrame
 facts_df = fact_list[0]

 # Converts facts_df to html table string
 facts_table = facts_df.to_html(header=False, index=False)


 # Mars Hemispheres
 # Open USGS Astrogeology Website
 hemispheres_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
 browser.visit(hemispheres_url)

 # Create BeautifulSoup object; parse with 'html.parser'
 hemispheres_html = browser.html
 hemisphere_soup = bs(hemispheres_html, 'html.parser')

 # Retreive all items that contain mars hemispheres information
 items = hemisphere_soup.find_all('div', class_='item')

 # Create empty list for hemisphere urls 
 hemisphere_image_urls = []

 # Store the main_ul 
 hemispheres_main_url = 'https://astrogeology.usgs.gov'

 # Loop through the items previously stored
 for i in items: 
  # Store title
  title = i.find('h3').text
  
  # Store link that leads to full image website
  partial_img_url = i.find('a', class_='itemLink product-item')['href']
  
  # Visit the link that contains the full image website 
  browser.visit(hemispheres_main_url + partial_img_url)
  
  # HTML Object of individual hemisphere information website 
  partial_img_html = browser.html
  
  # Parse HTML with Beautiful Soup for every individual hemisphere information website 
  hemisphere_soup2 = bs( partial_img_html, 'html.parser')
  
  # Retrieve full image source 
  img_url = hemispheres_main_url + hemisphere_soup2.find('img', class_='wide-image')['src']
  
  # Append the retreived information into a list of dictionaries 
  hemisphere_image_urls.append({"title" : title, "img_url" : img_url})


 # Store data in a dictionary
 mars_data = {
  "news_title": news_title,
  "news_p": news_p,
  "featured_image_url": featured_image_url,
  "mars_weather": mars_weather,
  "facts_table": facts_table,
  "hemisphere_image_urls": hemisphere_image_urls
 }  


 # Quit chromedriver
 browser.quit() 

 # Returns dictionary with all scraped data
 return mars_data


if __name__ == "__main__":
    print(scrape())


