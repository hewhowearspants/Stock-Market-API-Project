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

  componentDidMount() {
    this.getStocksData();
  }
  
  getStocksData = async () => {
    const { stocks } = this.state;

    const res = await axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks[0]},${stocks[1]},${stocks[2]},${stocks[3]},${stocks[4]}&types=quote,news,chart`)
    console.log(res.data);

    this.setState({
      stockData: res.data
    })
  }

  render() {
    const { stocks, stockData } = this.state;

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
