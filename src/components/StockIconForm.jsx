import React, { Component } from 'react';

class StockIconForm extends Component {
  state = {
    symbol: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { symbol } = this.state;
    const { index } = this.props;
    return (
      <div className='stock-icon-form'>
        <form onSubmit={() => this.props.updateStocks(index, symbol.toUpperCase())}>
        <input onChange={this.handleInputChange} placeholder='Enter Symbol' value={symbol} name='symbol' maxLength='5'/>
        <button onClick={() => this.props.updateStocks(index, symbol.toUpperCase())}>OK</button>
        </form>
      </div>
    )
  }
}

export default StockIconForm;