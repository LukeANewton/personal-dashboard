import React, { Component } from 'react';
import './AppSidebar.css';
import './SidebarLink.js';
import SidebarLink from './SidebarLink.js';

class AppSidebar extends Component{
  render() {
    return (
      <div id="App-Sidebar" className="Border-Bar">
        <SidebarLink text='Example 1' />
        <SidebarLink text='Example 2' />
        <SidebarLink text='Example 3' />
        <SidebarLink text='Example 4' />
      </div>
    );
  }
}

export default AppSidebar;
