import RequestManager from "./RequestManager";

import './RequestManager.js'
import ReactDOM from 'react-dom'
import React from 'react'
import RedditArticle from './RedditArticle/RedditArticle.js'

class RedditManager extends RequestManager{

    static buildArticles(title, jsonData){
        var elements = [<h1>{title} Feed</h1>];

        jsonData.forEach(element => {
            elements.push(
                <RedditArticle title={element.title} subreddit={element.subreddit} subredditLink={element.subredditLink} 
                    postLink={element.postLink} contentLink={element.url} />
            )
        });

        ReactDOM.render(elements, document.getElementById('App-Content'));
    }


    static async getPopularPosts(numberPosts=20){
        var request = await RequestManager.request('/api/reddit/popular?n='.concat(numberPosts));
        RedditManager.buildArticles('Popular', await request.json());
    }
}

export default RedditManager;