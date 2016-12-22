import React, { Component } from 'react'
import stocks from './../data/stocks.json'
import './../styles/TradingForm.css'

class TradingScreen extends Component {

  render() {
    const formItems = stocks.map((s) => {
      return (
        <tr key={s.name}>
          <td>
            <label htmlFor="">{s.name}</label>
            <a className="helpTip">?</a>
            <div className="helpDescription">
              <p>{s.description}</p>
            </div>
          </td>
          <td>${s.price}</td>
          <td><input type="number" min="0" step="10" defaultValue={s.shares}></input></td>
        </tr>
      )
    })

    return (
      <div className="TradingForm">
        <p>Help Eric Trump balance The Trump Organization portfolio!</p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Shares</th>
            </tr>
            {formItems}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TradingScreen