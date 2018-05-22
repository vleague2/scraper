# Washington Post News Scraper

This full-stack application is a web scraper that pulls articles from the Washington Post (politics section specifically) and allows users to peruse recent articles as well as save any they like. Users are able to add a note to any saved article.

Visit the page here: https://arcane-fortress-65683.herokuapp.com/

![application screenshot](/public/img/screenshot.png)

## How It Works
* The "scrape" button will scrape the Washington Post for articles, save them to the database, and then display them on the home page for the user
* The user can save articles by clicking "save", which changes a property in the database to mark the article as "saved"
* The user can re-scrape and duplicate articles will not be saved or displayed due to unique requirements in the database
* The user can view all of their saved articles, which searches the database for all articles with the property "saved"
* The user can add a note to their saved articles, which will be saved in a separate collection and associated with the chosen article
* The user can remove the article from their saved list, which changes the property in the database to "unsaved"
* The user can visit the original article through the hyperlinked title

## Technologies Used
Technology | Purpose
--- | ---
Node.js | Server-side language
Express | Configure server (routes, ports, static content, etc.)
Cheerio | Scrape the web
Mongo with Mongoose | Database to store content
Handlebars | Render content from the server to the client
jQuery | Manipulate dynamic content on the client side
Bootstrap | Framework for HTML

## Limitations
* The user can currently only add one note to each article.
* The application currently only scrapes the politics section of the Washington Post.
* Removing an article from the saved list will not remove the associated notes.