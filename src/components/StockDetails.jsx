import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HistoryItem from './HistoryItem';
import NewsArticle from './NewsArticle';

// renders more details about a stock, like news and history
class StockDetails extends Component {

  // renders last 7 days' closing/high/low prices
  renderHistory = () => {
    const { stockData } = this.props;
    if (stockData) {
      return stockData.chart.slice(-7).reverse().map((data, index) => {
        return <HistoryItem key={index} data={data} />
      })
    }
  }

  // renders news articles related to the stock
  renderNews = () => {
    const { stockData } = this.props;
    if (stockData) {
      return stockData.news.map((article, index) => {
        return <NewsArticle key={index} article={article} />
      })
    }
  }

  render() {
    const { symbol, stockData } = this.props;
    if (stockData) {
      var { companyName, latestPrice, change, changePercent } = stockData.quote;
      var { logo } = stockData;
    }

    return (
      <div className='stock-details'>
        <div className='stock-header'>
          {stockData && <div className='stock-logo' style={{backgroundImage: `url(${logo.url})`}}></div>}
          <h1 className='stock-symbol'>{symbol}</h1> 
          {stockData && <i className='stock-company-name'>({companyName})</i>}
          {stockData && 
            <div className='current'>
              <h2>${latestPrice.toFixed(2)}</h2>
              <p style={{color: change === 0 ? '#3C455C' : change > 0 ? 'green' : 'red'}}>
                <span>{change.toFixed(2)} </span>
                <span>{change > 0 ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                <span>{(Math.abs(changePercent) * 100).toFixed(2)}%</span>
              </p>
            </div>}
        </div>
        {stockData ? 
        <div className='stock-details-data'>
          
          <div className='history'>
            <h2><i className="far fa-calendar-alt"></i> 7-Day History</h2>
            {this.renderHistory()}
          </div>
          <div className='news'>
            <h2><i className="far fa-newspaper"></i> {companyName} in the News</h2>
            {this.renderNews()}
          </div>
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