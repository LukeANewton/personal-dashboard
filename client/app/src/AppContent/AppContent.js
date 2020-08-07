import React, { Component } from 'react';
import './AppContent.css';

class AppContent extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
      }
    
    callAPI() {
        fetch("/api/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentDidMount() {
        this.callAPI();
    }
    
    render() {
        return (
            <div className="App-Content" id="App-Content">
                 yo: {this.state.apiResponse}
            </div>
        );
    }
}

export default AppContent;