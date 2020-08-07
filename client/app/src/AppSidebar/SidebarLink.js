import React, { Component } from 'react';
import './SidebarLink.css';

class SidebarLink extends Component{
    constructor(props) {
      super(props);
      this.state = { text: 'link', clickAction: function(){} };
    }
  
    static getDerivedStateFromProps(props, state) {
        return {text: props.text,  clickAction: props.clickAction};
    }
  
    render() {
      return (
        <button onClick={this.state.clickAction}>{this.state.text}</button>
      );
    }
  }
  
  export default SidebarLink;