import React, { Component } from 'react';

import StockIcon from './StockIcon';
import StockIconForm from './StockIconForm';

class Home extends Component {

  renderStocks = () => {
    return this.props.stocks.map((symbol, index) => {
      if(symbol !== null) {
        return <StockIcon key={index} index={index} symbol={symbol} stockData={this.props.stocksData[symbol]} updateStocks={this.props.updateStocks} />
      } else {
        return <StockIconForm key={index} index={index} updateStocks={this.props.updateStocks} />
      }
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