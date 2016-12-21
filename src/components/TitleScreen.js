import React, { Component } from 'react'
import './TitleScreen.css'

class TitleScreen extends Component {
  render() {
    return (
      <div className="TitleScreen">
      	<div className="title__header">
			<h1>Trump Simulator</h1>
			(White House image)
      	</div>
      	<p className="title__start"><a className="button__next">New Game</a></p>
        <p className="title__copyright">
        	&copy; 2016 The Boston Globe. <br />
        	Licensed by Nintendo of America Corp.</p>
      </div>
    )
  }
}

export default TitleScreen