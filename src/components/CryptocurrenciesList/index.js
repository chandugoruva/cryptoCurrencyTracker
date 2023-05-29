import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {dataList} = props

  return (
    <div>
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptoImage"
      />
      <div className="items-div">
        <div className="for-flex">
          <p className="paragraph">Coin Type</p>
          <div className="for-flex1">
            <p className="paragraph1">USD</p>
            <p className="paragraph1">EURO</p>
          </div>
        </div>
        <ul>
          {dataList.map(each => (
            <CryptocurrencyItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
