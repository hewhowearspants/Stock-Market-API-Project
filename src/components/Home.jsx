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
        {this.renderStocks()}
      </div>
    )
  }
}

export default Home;