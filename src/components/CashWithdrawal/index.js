import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="customer-details-container">
            <div className="profile-img">
              <p className="initial">S</p>
            </div>
            <h1 className="customer-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance-amount">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
