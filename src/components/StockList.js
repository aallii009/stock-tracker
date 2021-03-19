import React, { Component } from 'react';

import { stock } from '../resources/stock.js';
import StockRow from './StockRow.js';



class StockList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastTradingDate: '20210317'

    }
  }

  componentDidMount() {
    stock.getLastTradingDate().then((data) => {
      console.log(data)
    this.setState({
      lastTradingDate: data[0].date
    })
    })
  }


  render() {
    const lastTradingDate = this.state.lastTradingDate
    return (
      <ul className = "list-group list-group-flush">
      <StockRow ticker = "AAPL" lastTradingDate = {lastTradingDate}/>
      <StockRow ticker = "LABP" lastTradingDate = {lastTradingDate} />
      <StockRow ticker = "GOOG" lastTradingDate = {lastTradingDate} />
      <StockRow ticker = "MSFT" lastTradingDate = {lastTradingDate}/>
      <StockRow ticker = "TSLA" lastTradingDate = {lastTradingDate}  />
      </ul>

)

  }
}

export default StockList;
