import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import StockDetails from './components/StockDetails';

class App extends Component {
  state = {
    stocks: ['FB', 'AAPL', 'GOOG', 'AMZN', 'MDB'],
    stocksData: {}
  }

  componentDidMount() {
    const socket = io('https://ws-api.iextrading.com/1.0/tops').connect();
    const { stocks, stocksData } = this.state;

    this.getStocksData();
    
    // receives real-time stock updates and updates sale price and percent changes
    socket.on('message', message => {
      let data = JSON.parse(message);

      if (stocksData) {
        let updatedStocksData = {...this.state.stocksData};
        updatedStocksData[data.symbol].quote.latestPrice = data.lastSalePrice;
        updatedStocksData[data.symbol].quote.changePercent = data.marketPercent;
        this.setState({
          stocksData: updatedStocksData
        })
      }
    })

    socket.on('connect', () => {
      console.log('connected to IEX websockets');
      // Subscribe to receive updates for selected stocks
      socket.emit('subscribe', `${stocks[0]},${stocks[1]},${stocks[2]},${stocks[3]},${stocks[4]}`)
    
      // Unsubscribe from updates (i.e. aig+)
      //socket.emit('unsubscribe', 'snap,aig+')
    })
    
    // Disconnect from the channel
    socket.on('disconnect', () => console.log('Disconnected.'))
  }
  
  getStocksData = async () => {
    const { stocks } = this.state;

    const res = await axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks[0]},${stocks[1]},${stocks[2]},${stocks[3]},${stocks[4]}&types=quote,news,chart`)
    console.log(res.data);

    this.setState({
      stocksData: res.data
    })
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
                <Home stocks={stocks} stocksData={stocksData}/>
              )}
            />
            <Route exact path='/:symbol'
              render={(props) => (
                <StockDetails symbol={props.match.params.symbol} stockData={stocksData[props.match.params.symbol]} />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
