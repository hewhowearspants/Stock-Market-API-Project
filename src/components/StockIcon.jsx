import React from 'react';
import { Link } from 'react-router-dom';

// renders stock icon on home page with basic information
const StockIcon = ({ index, symbol, stockData, updateStocks }) => {
  if (stockData) {
    var { companyName, latestPrice, change, changePercent } = stockData.quote;
  }
  
  return (
    <div className='stock-icon-wrapper'>
      <div className='delete-button' onClick={() => updateStocks(index, null)}>
        <i className="fas fa-trash-alt"></i>
      </div>
      <Link to={`/${symbol}`}>
        <div className='stock-icon'>
        <h3>{symbol}</h3>
        <i>{stockData && companyName}</i>
        {stockData ? 
          <div className='stock-icon-data'>
            <p className='current-price'>${latestPrice.toFixed(2)}</p>
            <p style={{color: change === 0 ? '#3C455C' : change > 0 ? 'green' : 'red'}}>
              <span>{change.toFixed(2)} </span>
              <span>{change > 0 ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
              <span>{(Math.abs(changePercent) * 100).toFixed(2)}%</span>
            </p>
          </div>
        :
          <div className='stock-icon-data'>
            <p>Loading...</p>
          </div>
        }
      </div>
    </Link>
  </div>
  )
}

export default StockIcon;