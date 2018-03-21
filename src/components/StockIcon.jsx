import React from 'react';

const StockIcon = ({ symbol, stockData }) => (
  <div className='stock-icon'>
    <h3>{symbol}</h3>
    {stockData ? 
      <div className='stock-icon-data'>
        <p>{stockData.quote.companyName}</p>
        <p>${stockData.quote.latestPrice}</p>
        <p>
          <span>{stockData.quote.change} </span>
          <span>{stockData.quote.changePercent * 100}%</span>
        </p>
      </div>
    :
      <div className='stock-icon-data'>
        <p>Loading...</p>
      </div>
    }
  </div>
)

export default StockIcon;