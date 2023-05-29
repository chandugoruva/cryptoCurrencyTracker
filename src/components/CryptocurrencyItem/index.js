import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = each
  return (
    <li>
      <div className="li-items">
        <div className="logo-item">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="logo-paragraph">{currencyName}</p>
        </div>
        <div className="usd-items">
          <p className="usd-paragraph">{usdValue}</p>
          <p className="usd-paragraph">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
