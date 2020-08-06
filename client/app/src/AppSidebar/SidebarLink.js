import React, { Component } from 'react';
import './SidebarLink.css';

class SidebarLink extends Component{
    constructor(props) {
      super(props);
      this.state = { text: 'link' };
    }
  
    static getDerivedStateFromProps(props, state) {
        return {text: props.text };
    }
  
    render() {
      return (
        <button>{this.state.text}</button>
      );
    }
  }
  
  export default SidebarLink;