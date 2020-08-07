var express = require("express");
var router = express.Router();
var fetch = require('node-fetch')

router.get("/", async function(req, res, next) {

    //fetch reddit posts
    var posts = await fetch("http://reddit.com/r/all/hot/.json?count=20", {
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
            url: element.data.url
        });
    });

    res.send(responsePosts);
});

module.exports = router;