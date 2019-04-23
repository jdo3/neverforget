import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignInPage from './pages/sign-in-page';
import HomePage from './pages/home-page';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signin" component={SignInPage} />
                </div>
            </Router>
        );
    }
}

export default App;
