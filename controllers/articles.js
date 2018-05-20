// REQUIRE MODULES
const mongoose = require("mongoose");

// REQUIRE MODELS
const dbArticle = require("../models/articles.js");

// REQUIRE SCRAPER SCRIPT
const scraper = require('../scripts/scraper.js');

// CREATE OBJECT TO BE EXPORTED
let article = {
    
    // FUNCTION TO PULL ALL UNREADS FROM DATABASE
    showUnread: function(req, res) {
        console.log("Finding all unsaved articles...")

        // SEARCH DB FOR ALL UNSAVED ARTICLES
        dbArticle.find({"saved": false})
        .then(dbResponse => {
            console.log(dbResponse);

            // ASSIGN THE RESULTING ARTICLES TO AN OBJECT
            let renderArticles = {articles: dbResponse}

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
    },

    saveArticle: function(req, res) {
        // PULL ID FROM THE REQUEST PARAMS
        let id = req.params.id;

        console.log(id);

        // QUERY DATABASE TO FIND THE ENTRY AND UPDATE
        dbArticle.findOneAndUpdate({_id: id}, {'saved': true}).then(result => {
            console.log(result);
            res.send(200);
        })
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