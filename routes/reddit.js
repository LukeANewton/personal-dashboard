var express = require("express");
var router = express.Router();
var fetch = require('node-fetch')

router.get("/", async function(req, res, next) {
    //get query parameters
    var limit = req.query.limit;
    var filter = req.query.filter;
    var subreddit = req.query.subreddit;

    //fetch reddit posts
    var posts = await fetch('http://reddit.com/r/'.concat(subreddit, '/', filter, '/.json?limit=', limit), {
        method  : 'GET', 
        headers : {
            //reddit throttles requests without custom user-agent strings
            "User-Agent": "Heroku:personal-dashboard:v1 (by /u/in_schoool_forever)"
        } 
    });
    posts = await posts.json();

    //extract useful components from reddit
    var responsePosts = new Array();
    posts.data.children.forEach(element => {
        responsePosts.push({
            subreddit: element.data.subreddit,
            subredditLink: "http://reddit.com/r/".concat(element.data.subreddit),
            postLink: "http://reddit.com".concat(element.data.permalink),
            title: element.data.title,
            text: element.data.selftext,
            url: element.data.url
        });
    });

    res.send(responsePosts);
});

module.exports = router;