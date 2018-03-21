import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StockDetails extends Component {
  render() {
    const { symbol, stockData } = this.props;

    return (
      <div className='stock-details'>
        <h1>{symbol}</h1>
        {stockData ? 
        <div className='stock-details-data'>
          <h3>{stockData.quote.companyName}</h3>
        </div>
        :
        <div className='stock-details-data'>
          <h2>Loading...</h2>
        </div>
        }
        <Link to='/'>
          Back
        </Link>
      </div>
    )
  }
}

export default StockDetails;