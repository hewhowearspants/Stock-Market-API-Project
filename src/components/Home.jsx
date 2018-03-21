import React, { Component } from 'react';

import StockIcon from './StockIcon'

class Home extends Component {

  renderStocks = () => {
    return this.props.stocks.map((symbol, index) => {
      return <StockIcon key={index} symbol={symbol} stockData={this.props.stocksData[symbol]} />
    })
  }

  render() {
    return (
      <div className='home'>
        <div className='stock-icons'>
          {this.renderStocks()}
        </div>
      </div>
    )
  }
}

export default Home;