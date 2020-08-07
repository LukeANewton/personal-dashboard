import RequestManager from "./RequestManager";

import './RequestManager.js';
import ReactDOM from 'react-dom';
import React from 'react';
import RedditArticle from './RedditArticle/RedditArticle.js';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

class RedditManager extends RequestManager{

    static buildArticles(title, jsonData){
        var elements = [<h1>{title} Feed</h1>];

        jsonData.forEach(element => {
            elements.push(
                <RedditArticle title={element.title} subreddit={element.subreddit} subredditLink={element.subredditLink} 
                    postLink={element.postLink} contentLink={element.url} text={element.text}/>
            )
        });

        ReactDOM.render(elements, document.getElementById('App-Content'));
    }


    static async getPopularPosts(numberPosts=20){
        const LoadingIndicator = props => {
               const { promiseInProgress } = usePromiseTracker();
            
               return (
                 promiseInProgress && 
                 <div
                    style={{
                        width: "100%",
                        height: "100",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Loader type="ThreeDots" color="#d1d1d1" height="100" width="100" />
                </div>
              );  
             }


        var elements = (
            <div>
                <h1>Popular Feed</h1>
                <LoadingIndicator/>
            </div>
        );

        ReactDOM.render(elements, document.getElementById('App-Content'));


        var request = await RequestManager.request('/api/reddit/popular?n='.concat(numberPosts));
        RedditManager.buildArticles('Popular', await request.json());
    }
}

export default RedditManager;