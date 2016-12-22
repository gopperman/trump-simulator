import React, { Component } from 'react'
import './App.css'
import TitleScreen from './components/TitleScreen.js'
import SwearingIn from './components/SwearingIn.js'
import NewsScreen from './components/NewsScreen.js'
import TradingScreen from './components/TradingScreen.js'
import OvalOffice from './components/OvalOffice.js'
import GameOver from './components/GameOver.js'
import { playSound } from './util/Sound.js'

class App extends Component {

  componentDidMount() {
    console.log(playSound)
    playSound('hailtothechief')
  }

  render() {
    return (
      <div className="App">
        <TitleScreen />
        <hr />
        <SwearingIn />
        <hr />
        <NewsScreen />
        <hr />
        <TradingScreen />
        <hr />
        <OvalOffice />
        <hr />
        <GameOver />
      </div>
    )
  }
}

export default App
