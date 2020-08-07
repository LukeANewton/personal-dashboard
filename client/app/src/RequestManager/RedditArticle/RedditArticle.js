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
      contentLink: '',
      text: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { 
      title: props.title,
      subreddit: props.subreddit,
      subredditLink: props.subredditLink, 
      postLink: props.postLink,
      contentLink: props.contentLink,
      text: props.text
    }
  }

  render() {
    return (
      <div className="Reddit-Article">
        <a href={this.state.postLink}><h3>{this.state.title}</h3></a>
        <p>r/<a href={this.state.subredditLink}>{this.state.subreddit}</a></p>
        {this.addCollapsible()}
        <p>External Link: <a href={this.state.contentLink}>{this.state.contentLink}</a></p>
      </div>
    );
  }

  addCollapsible(){
    const removeMd = require('remove-markdown');
    if(this.state.text !== ''){
      return this.buildCollapsable('Show Text', <p>{removeMd(this.state.text)}</p>);
    } else if(this.isImage(this.state.contentLink)){
      return this.buildCollapsable('Show Image', <img src={this.state.contentLink} alt={this.state.contentLink}/>);
    } 
  }

  buildCollapsable(label, content){
    return ( 
      <div >
          <button type="button" class="collapsible" onClick = {() => {
            var content = document.getElementById('content-'.concat(this.state.postLink));
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          }}>{label}</button>
          <div class="content" id={'content-'.concat(this.state.postLink)}>
            {content}
          </div>
        </div>
      );
  }

  isImage(url){
    var arr = [ "jpeg", "jpg", "gif", "png" ];
    var ext = url.substring(url.lastIndexOf(".")+1);
    return arr.includes(ext);
  }
}

export default RedditArticle;
