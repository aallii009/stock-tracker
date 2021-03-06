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

getYesterdaysClose: (ticker, date, callback) => {
  fetch(stock.yesterdaysCloseURL(ticker))
  .then((response) => response.json())
  .then((data) => callback(stock.formatPriceData(data)))
},
yesterdaysCloseURL: (ticker, date) => {

// var today = new Date(date).toISOString().split('T')[0].replace(/-/g, '')

// console.log(today)

 return  `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20210223&token=${iex.api_token}`
}


}
