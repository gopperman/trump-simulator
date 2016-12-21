import React, { Component } from 'react'
import './../styles/Scoreboard.css'

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <p>Cash: $1,000,000</p>
        <p>Stocks: $2,000,000</p>
        <p>Twitter Followers: 123,456,789</p>
      </div>
    )
  }
}

export default Scoreboard