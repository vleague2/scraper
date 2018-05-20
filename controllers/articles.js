const mongoose = require("mongoose");

// Require all models
const db = require("../models/articles.js");

// require scraper script
const scraper = require('../scripts/scraper.js');

let article = {
    newArticles: function(req, res) {
        console.log("Scraping...");
        scraper.scrape();
        return res.render('index');
        /*
        db.find({"saved": false})
        .then(dbArticle => {
            console.log(dbArticle);
            return res.render('index');
        })
        .catch(err => {
            console.log(err.message);
        })
        */
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