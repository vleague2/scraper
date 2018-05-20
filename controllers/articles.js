// REQUIRE MODULES
const mongoose = require("mongoose");

// REQUIRE MODELS
const db = require("../models/articles.js");

// REQUIRE SCRAPER SCRIPT
const scraper = require('../scripts/scraper.js');

// CREATE OBJECT TO BE EXPORTED
let article = {
    
    // FUNCTION TO PULL ALL UNREADS FROM DATABASE
    showUnread: function(req, res) {
        console.log("Finding all unsaved articles...")

        // SEARCH DB FOR ALL UNSAVED ARTICLES
        db.find({"saved": false})
        .then(dbArticles => {
            console.log(dbArticles);

            // ASSIGN THE RESULTING ARTICLES TO AN OBJECT
            let renderArticles = {articles: dbArticles}

            // SEND OBJECT TO HANDLEBARS AND RENDER HOME PAGE
            res.render('index', renderArticles);
        })

        // ERROR HANDLING
        .catch(err => {
            console.log(err.message);
        })
    },

    // FUNCTION TO PULL NEW ARTICLES FROM WAPO
    newArticles: function(req, res) {
        console.log("Scraping...");

        // CALL THE SCRAPER FUNCTION AND PASS IN A CALLBACK
        scraper.scrape(function() {
            article.showUnread(req, res); 
        });        
    }
}

// EXPORT 
module.exports = article;

// function to save article

    // update one article as saved

    // send 200 status code

// function to view saved articles

    // find all saved articles
    
    // render handlebars view with db response