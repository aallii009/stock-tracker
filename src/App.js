import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow.js'


function App() {
  return (
    <div className="App">
      <div className = "container">
       <div className ="col-md-5 mt-5">
        <div className="card">
            <ul className = "list-group list-group-flush">
            <StockRow ticker = "AAPL" />
            <StockRow ticker = "LABP" />
            <StockRow ticker = "GOOG" />
            <StockRow ticker = "MSFT" />
            <StockRow ticker = "TSLA" />
            </ul>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
