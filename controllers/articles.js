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
        dbArticle.find({"saved": false}).sort({'date': -1})
        .then(dbResponse => {
            console.log('Found unsaved articles...');

            // ASSIGN THE RESULTING ARTICLES TO AN OBJECT
            let renderArticles = {articles: dbResponse}

            console.log('Rendering home page...')
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

    // FUNCTION TO SAVE AN ARTICLE
    saveArticle: function(req, res) {
        // PULL ID FROM THE REQUEST PARAMS
        let id = req.params.id;

        console.log('Finding the article to update...');
        // QUERY DATABASE TO FIND THE ENTRY AND UPDATE
        dbArticle.findOneAndUpdate({_id: id}, {'saved': true}).then(result => {
            console.log(result);
            res.send(200);
        })
    },

    //FUNCTION TO VIEW SAVED ARTICLES
    viewSaved: function(req, res) {

        console.log('Finding all saved articles...');

        dbArticle.find({'saved': true}).sort({'date': -1})
        .then(dbResponse => {
            console.log(dbResponse);

            // ASSIGN THE RESULTING ARTICLES TO AN OBJECT
            let renderArticles = {articles: dbResponse}

            res.render('saved', renderArticles);
        })
    }
}

// EXPORT 
module.exports = article;

// function to view saved articles

    // find all saved articles
    
    // render handlebars view with db response