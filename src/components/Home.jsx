import React, { Component } from 'react';

class Home extends Component {

  renderStocks = () => {
    return this.props.stocks.map((stock, index) => {
      return <p key={index}>{stock}</p>
    })
  }

  render() {
    const { stocks } = this.props;

    return (
      <div className='home'>
        <p>Welcome Home</p>
        {this.renderStocks()}
      </div>
    )
  }
}

export default Home;