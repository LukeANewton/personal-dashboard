import React, { Component } from 'react';
import './RedditArticle.css';

class RedditArticle extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      subreddit: '',
      subredditLink: '', 
      postLink: '',
      contentLink: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { 
      title: props.title,
      subreddit: props.subreddit,
      subredditLink: props.subredditLink, 
      postLink: props.postLink,
      contentLink: props.contentLink
    }
  }

  render() {
    return (
      <div className="Reddit-Article">
        <a href={this.state.postLink}><h3>{this.state.title}</h3></a>
        <p>r/<a href={this.state.subredditLink}>{this.state.subreddit}</a></p>
        <p>External Link: <a href={this.state.contentLink}>{this.state.contentLink}</a></p>
      </div>
    );
  }
}

export default RedditArticle;
