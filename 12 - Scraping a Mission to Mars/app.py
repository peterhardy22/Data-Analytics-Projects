#Dependencies
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Create an instance of Flask
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_data_app"
mongo = PyMongo(app)

@app.route("/")
def index():
    mars_data = mongo.db.mars.find_one()
    return render_template("index.html", mars_data = mars_data)

@app.route("/scrape")
def scrape():
    mars_data = scrape_mars.scrape()
    mongo.db.mars.update({}, mars_data, upsert=True)
    # Redirect back to home page
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)



















