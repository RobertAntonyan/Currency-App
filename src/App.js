import { useEffect, useRef, useState } from 'react';
import './App.css';
import Block from './components/Block/Block';

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('AMD')
  const [fromPrice, setFromPrice] = useState()
  const [toPrice, setToPrice] = useState()
  // const ratesRef = useRef({})

  //  const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
   const url = 'https://www.cbr-xml-daily.ru/latest.js'

// const url ='https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates)
          console.log(json);
      }).catch(err => {
        console.warn(err);
        alert('Chstacvec info stanal')
      })
  }, [])


  useEffect(() => {
onChangeFromPrice(fromPrice)
  },[fromCurrency, fromPrice])


  useEffect(() => {
    onChangeToPrice(toPrice)
      },[toCurrency])

  const onChangeFromPrice = (value) => {
    const price = Number(value) / (+(rates[fromCurrency]))
    const result = price * rates[toCurrency]
    setFromPrice(value)
    setToPrice(result.toFixed(2))
   
      }


  const onChangeToPrice = (value) => {
    const result = (+(rates[fromCurrency]) / (rates[toCurrency]) * Number(value))
    setToPrice(value)
    setFromPrice(result.toFixed(0))
    // console.log(result);
  }



  return (
    <div className="App">


      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}

      />

      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}

      />





    </div>
  );
}

export default App;
