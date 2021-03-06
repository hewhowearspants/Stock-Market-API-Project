import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import StockDetails from './components/StockDetails';
import Footer from './components/Footer';

class App extends Component {
  state = {
    stocks: ['FB', 'AAPL', 'GOOG', 'AMZN', 'MDB'],
    stocksData: {}
  }

  componentWillMount() {
    // checks local storage for custom stocks list, updates state
    if(localStorage.getItem('stocks')) {
      console.log('fetching local stocks list...');
      let stocks = JSON.parse(localStorage.getItem('stocks'));
      this.setState({ stocks })
    }
  }

  componentDidMount() {
    // gets stock data from API every five seconds
    this.getStocksData();
    setInterval(this.getStocksData, 5000);
  }
  
  // API batch request for quotes, charts, logos, and news for all stocks
  getStocksData = async () => {
    const { stocks } = this.state;

    const res = await axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks[0]},${stocks[1]},${stocks[2]},${stocks[3]},${stocks[4]}&types=quote,news,logo,chart`)

    this.setState({
      stocksData: res.data
    })
  }

  updateStocks = (index, symbol) => {
    let updatedStocks = [...this.state.stocks];

    // updates stocks list in state
    updatedStocks[index] = symbol;

    this.setState({
      stocks: updatedStocks,
    })

    // saves stocks list to local storage
    localStorage.setItem('stocks', JSON.stringify(updatedStocks));

    // updates stock data for all stocks
    this.getStocksData();
  }

  render() {
    const { stocks, stocksData } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path = '/'
              render={() => (
                <Home stocks={stocks} stocksData={stocksData} updateStocks={this.updateStocks} />
              )}
            />
            <Route exact path='/:symbol'
              render={(props) => (
                <StockDetails symbol={props.match.params.symbol} stockData={stocksData[props.match.params.symbol]} />
              )}
            />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
