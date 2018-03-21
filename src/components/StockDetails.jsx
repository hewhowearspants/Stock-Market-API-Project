import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StockDetails extends Component {
  state = {
    stockData: null
  }

  componentDidMount() {
    this.setState({
      stockData: this.props.stockData
    })
  }

  renderHistory = () => {
    const { stockData } = this.props;
    if (stockData) {
      return stockData.chart.slice(-7).reverse().map((date, index) => {
        return (
          <div className='history-date' key={index}>
            <span>{date.date} <b>${date.close.toFixed(2)}</b></span>
          </div>
        )
      })
    }
  }

  renderNews = () => {
    const { stockData } = this.props;
    if (stockData) {
      return stockData.news.map((article, index) => {
        return (
          <article className='news-article' key={index}>
            <a href={article.url}>{article.headline}</a>
            <p>{article.summary}</p>
          </article>
        )
      })
    }
  }

  render() {
    const { symbol, stockData } = this.props;
    if (stockData) {
      var { companyName, latestPrice, change, changePercent } = stockData.quote;
    }

    return (
      <div className='stock-details'>
        <h1>{symbol} {stockData && <i>({companyName})</i>}</h1>
        {stockData ? 
        <div className='stock-details-data'>
          <h3>${latestPrice.toFixed(2)} {change.toFixed(2)} {changePercent.toFixed(2)}%</h3>
          <div className='history'>
            <h2>7-Day History</h2>
            {this.renderHistory()}
          </div>
          <div className='news'>
            <h2>{companyName} in the News</h2>
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