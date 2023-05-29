import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    dataList: [],
  }

  componentDidMount() {
    this.CurrencyList()
  }

  CurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({isLoading: false, dataList: updatedData})
  }

  CryptocurrencyTracker = () => {
    const {dataList} = this.state

    return <CryptocurrenciesList dataList={dataList} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-color">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.CryptocurrencyTracker()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
