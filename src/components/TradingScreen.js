import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js'
import TradingForm from './TradingForm'
import './../styles/TradingScreen.css'

class TradingScreen extends Component {
  render() {
    return (
      <div className="TradingScreen">
		<div className="section__header">
			<h1>Business Time!</h1>
			<img src="/img/whitehouse.png" />
		</div>
        <Scoreboard />
        <p className="center"><i>*ring* *ring*</i></p>
        <p>Hello, This is your son, Eric. The Trump Organization's monthly board meeting is coming up, and I can use some business tips. Help me out, Dad!</p>
        <hr />
        <TradingForm />
      </div>
    )
  }
}

export default TradingScreen