import React, { Component } from 'react';
import axios from 'axios';

class StockIconForm extends Component {
  state = {
    symbol: '',
    placeholder: 'Enter Symbol'
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { index } = this.props;
    const { symbol } = this.state;
    try {
      const res = await axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/logo`);
      res && this.props.updateStocks(index, symbol.toUpperCase())
    } catch(err) {
      this.setState({
        symbol: '',
        placeholder: 'BAD SYMBOL'
      })
      setTimeout(() => {
        this.setState({
          placeholder: 'Enter Symbol'
        })
      }, 1000);
    }
    
  }

  render() {
    const { symbol, placeholder } = this.state;

    return (
      <div className='stock-icon-form'>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} placeholder={placeholder} value={symbol} name='symbol' maxLength='5'/>
        <button onClick={this.handleSubmit}>OK</button>
        </form>
      </div>
    )
  }
}

export default StockIconForm;