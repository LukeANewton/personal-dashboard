import RequestManager from "./RequestManager";

import './RequestManager.js';
import ReactDOM from 'react-dom';
import React from 'react';
import RedditArticle from './../RedditArticle/RedditArticle.js';
import DropdownMenu from './../DropdownMenu/DropdownMenu.js';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

class RedditManager extends RequestManager{
    static async getPosts(subreddit='popular', filter='hot', numberPosts=100){
        //make loading icon component
        const LoadingIndicator = props => {
            const { promiseInProgress } = usePromiseTracker();
               return (
                 promiseInProgress && 
                 <div id='loader'>
                    <Loader type="ThreeDots" color="#d1d1d1" height="100" width="100" />
                </div>
                );  
            }

        //create content page header
        const subreddits = ['Popular', 'Canada', 'CarletonU', 'Cybersecurity', 'Lastweekinscience', 'LifeProTips', 
        'Nottheonion', 'Ontario', 'Ottawa', 'Science', 'Space', 'Worldnews', 'YouShouldKnow'];
        const filters = ['hot', 'new'];
        const subredditDropdownId = 'subreddit-select'
        const filterDropdownId = 'filter-select'
        var elements = (
            <div>
                <h1>{subreddit.charAt(0).toUpperCase() + subreddit.slice(1)} {filter.charAt(0).toUpperCase() + filter.slice(1)} Feed</h1>
                <div className='left-to-right-bar'>
                    <DropdownMenu id={subredditDropdownId} options={subreddits}/>
                    <DropdownMenu id={filterDropdownId} options={filters}/>
                    <button onClick={() => this.getPosts(document.getElementById(subredditDropdownId).value, 
                        document.getElementById(filterDropdownId).value)}>Load</button>
                </div>
                <LoadingIndicator/>
            </div>
        );

        //set content page header
        ReactDOM.render(elements, document.getElementById('app-title-block'));

        //make request for post info
        var request = await RequestManager.request('/api/reddit?subreddit='.concat(subreddit, '&filter=', filter, '&limit=', numberPosts));
        var jsonData = await request.json();
        
        //make content page body
        elements = [];
        jsonData.forEach(element => {
            elements.push(
                <RedditArticle title={element.title} subreddit={element.subreddit} subredditLink={element.subredditLink} 
                    postLink={element.postLink} contentLink={element.url} text={element.text}/>
            )
        });

        //make content page body
        ReactDOM.render(elements, document.getElementById('app-body-block'));
    }
}

export default RedditManager;