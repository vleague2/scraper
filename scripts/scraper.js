// REQUIRED MODULES
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

// REQUIRE MODELS
const dbArticle = require('../models/articles.js');

// SET UP MONGOOSE
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// SET UP EXPRESS
let app = express();

// SET UP BODY PARSER
app.use(bodyParser.urlencoded({extended:true}));

// EXPORT
module.exports = {

    // SCRAPE METHOD
    scrape: function(cb) {

        // REQUEST
        console.log("Sending request...")
        request("https://www.washingtonpost.com/business/technology/", (err,response,html) => {
            console.log("Finding data on WAPO...")

            // ASSIGN DATA TO CHEERIO
            let $ = cheerio.load(html);

            // CREATE AN ARRAY OF RESULTS FOR THE DB LATER
            let results = [];

            console.log("Looping through all story bodies...")

            // TARGET STORY-BODY AND RUN A FOR EACH LOOP
            $('div.story-body').each((i, element) => {

                console.log("Running loop #" + i)

                // CREATE EMPTY RESULT OBJECT
                let result = {};

                // CREATE RESULT TITLE
                result.title = $(element).find('div.story-headline').find('h3').find('a').text();

                // CREATE RESULT LINK
                result.link = $(element).find('div.story-headline').find('h3').find('a').attr('href');
            
                // CREATE RESULT TEASER
                result.teaser = $(element).find(".story-description").find("p").text();
                
                // console.log(result);
                
                // PUSH TO ARRAY
                console.log('Pushing result into array...');
                results.push(result); 
            })

            console.log("Results going into db...");

            // CREATE NEW DATABASE ENTRIES
            dbArticle.create(results)
            .then(dbArticle => {
                console.log("Saved to db!");

                // EXECUTE CALLBACK FUNCTION
                cb();
            })

            // IF ERROR, RETURN AS JSON
            .catch(err => {
                console.log(err);
            })
        })
    }
}