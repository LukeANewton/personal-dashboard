import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js';
import AppSidebar from './AppSidebar/AppSidebar.js';
import AppContent from './AppContent/AppContent.js';
import RequestManager from './RequestManager/RequestManager.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    RequestManager.requestText("/api/testAPI")
        .then(res => this.setState({ apiResponse: res }));
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppSidebar />
        <AppContent />
      </div>
    );
  }
}

export default App;
