const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

const db = require('./models');

// SET UP MONGOOSE
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

module.exports = {
    scrape: function() {
        axios.get("https://www.washingtonpost.com/business/technology/?nid=top_nav_tech&utm_term=.4c8743b741ec")
        .then(response => {
            let $ = cheerio.load(response.data);

            $("story-body div").each((i, element) => {
                let result = {};
                result.title = $(this).find("story-headline div").find("h3").find("a").text();
                result.link = $(this).find("story-headline div").find("h3").find("a").attr("href");
                result.teaser = $(this).find("story-description div").find("p").text();

                db.Article.create(result)
                .then(dbArticle => {
                    console.log(dbArticle);
                })
                .catch(err => {
                    return res.json(err);
                })
            })
        })
    }
}