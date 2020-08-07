import React, { Component } from 'react';
import './AppContent.css';

class AppContent extends Component{
    render() {
        return (
            <div className="App-Content" id="App-Content">
                <div id='app-title-block'></div>
                <div id='app-body-block'></div>
            </div>
        );
    }
}

export default AppContent;