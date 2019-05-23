# Dependencies
from flask import Flask, render_template
from flask_pymongo import PyMongo
import scrape_mars


# Create an instance of Flask
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_data_app"
mongo = PyMongo(app)

# Create database on MongoDB
db = mongo.mars_data_db
# Create collection
collection = db.mars_collection

@app.route("/")
def home():

    mars_data = mongo.db.mars_collection.find()
    print(mars_data)

    return render_template("index.html", mars_data=mars_data)


@app.route("/scrape")
def scrape_mars_data():

    scrape_results = scrape_mars.scrape()
    collection.replace_one({}, scrape_results, upsert=True)

if __name__ == "__main__":
    app.run(debug=True)




# Set a connection
#conn = "mongodb://localhost:27017"
# Set up client
#client = pymongo.MongoClient(conn)



















