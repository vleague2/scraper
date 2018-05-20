const mongoose = require("mongoose");

// Require all models
const db = require("../models/articles.js");

// require scraper script
const scraper = require('../scripts/scraper.js');

let article = {
    

    showUnread: function(req, res) {
        console.log("Finding all unsaved articles...")

        // SEARCH DB FOR ALL UNSAVED ARTICLES
        db.find({"saved": false})
        .then(dbArticles => {
            console.log(dbArticles);

            let renderArticles = {articles: dbArticles}

            res.render('index', renderArticles);
        })
        .catch(err => {
            console.log(err.message);
        })
    },

    newArticles: function(req, res) {
        console.log("Scraping...");

        // CALL THE SCRAPER FUNCTION AND PASS IN A CALLBACK
        scraper.scrape(function() {
            article.showUnread(req, res); 
        });        
    }
}

module.exports = article;

// function for get new articles

    // use scrape script to scrape wapo

    // save all scrapes to DB

    // query db for all unsaved articles

    // render handlebars view with db response

// function to save article

    // update one article as saved

    // send 200 status code

// function to view saved articles

    // find all saved articles
    
    // render handlebars view with db response