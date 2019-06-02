#Dependencies
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Create an instance of Flask
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/mars_app")

@app.route('/')
def index():
    mars_data = mongo.db.mars_data_db.find_one()
    return render_template("index.html", marsdata = mars_data)

@app.route("/scrape")
def scrape():
    mars_collection = mongo.db.mars_data_db
    mars_data = scrape_mars.scrape()
    mars_collection.update(
        {},
        mars_data,
        upsert=True
    )
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)