import React, { Component } from 'react'
import stocks from './../data/stocks.json'

class TradingScreen extends Component {

  render() {
    const formItems = stocks.map((s) => {
      console.log(s)
      return (
        <tr key={s.name}>
          <td><label htmlFor="">{s.name}</label></td>
          <td>${s.price}</td>
          <td><input type="number" value="{s.shares}"></input></td>
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