import React from 'react';
import { Link } from 'react-router-dom';

const StockIcon = ({ symbol, stockData }) => (
  <Link to={`/${symbol}`}>
    <div className='stock-icon'>
      <h3>{symbol}</h3>
      {stockData ? 
        <div className='stock-icon-data'>
          <p>{stockData.quote.companyName}</p>
          <p>${stockData.quote.latestPrice.toFixed(2)}</p>
          <p>
            <span>{stockData.quote.change.toFixed(2)} </span>
            <span>{(stockData.quote.changePercent * 100).toFixed(2)}%</span>
          </p>
        </div>
      :
        <div className='stock-icon-data'>
          <p>Loading...</p>
        </div>
      }
    </div>
  </Link>
)

export default StockIcon;