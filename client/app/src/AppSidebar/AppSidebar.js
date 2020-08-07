import React, { Component } from 'react';
import './AppSidebar.css';
import './SidebarLink.js';
import SidebarLink from './SidebarLink.js';
import RedditManager from './../RequestManager/RedditManager.js'

class AppSidebar extends Component{
  render() {
    return (
      <div id="App-Sidebar" className="Border-Bar">
        <SidebarLink text='Reddit' clickAction={() => {RedditManager.getPosts()}} />
        <SidebarLink text='Example 2' clickAction={() => {console.log("test")}} />
        <SidebarLink text='Example 3' clickAction={() => {console.log("test")}} />
        <SidebarLink text='Example 4' clickAction={() => {console.log("test")}} />
      </div>
    );
  }
}

export default AppSidebar;
