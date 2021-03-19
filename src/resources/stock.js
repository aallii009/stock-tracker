import  { iex } from '../config/iex.js'


export const stock = {

  latestPrice: (ticker, callback) => {
    const url = stock.latestPriceURL(ticker)
    fetch(url)
    .then((response) => response.json())
    .then((data) => callback(stock.formatPriceData(data)))
},

 latestPriceURL: (ticker) => {
  return  `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
},

formatPriceData: (data) => {
  const  stockData = data[data.length -1]
  const  formattedData = {}
    formattedData.price = stockData.close
    formattedData.date = stockData.date
    formattedData.time = stockData.label
    return formattedData

},

getYesterdaysClose: (ticker, lastTradingDate, callback) => {
  //stock.getLastTradingDate(date).then((data) => {
  if (lastTradingDate != "") {
  fetch(stock.yesterdaysCloseURL(ticker, lastTradingDate))
  .then((response) => response.json())
  .then((data) => callback(stock.formatPriceData(data)))
}

//  })

},

getLastTradingDate: () => {
  var today = new Date().toISOString().split('T')[0].replace(/-/g, '')
  const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`

  return fetch(url).then((res) => res.json());
},

yesterdaysCloseURL: (ticker, lastTradingDate) => {

 //var lastTradingDate = stock.formatDate(date);


 return  `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=${lastTradingDate}&token=${iex.api_token}`
},

formatDate: (date) => {
  return new Date(date).toISOString().split('T')[0].replace(/-/g, '')
}


}
