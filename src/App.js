import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  state = {
    stocks: ['FB', 'AAPL', 'GOOG', 'AMZN', 'MDB'],
    stockData: {}
  }

  render() {
    const { stocks } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path = '/'
              render={() => (
                <Home stocks={stocks} />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
