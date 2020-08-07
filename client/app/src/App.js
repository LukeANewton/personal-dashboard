import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js';
import AppSidebar from './AppSidebar/AppSidebar.js';
import AppContent from './AppContent/AppContent.js';

class App extends Component{
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
