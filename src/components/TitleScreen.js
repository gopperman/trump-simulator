import React, { Component } from 'react'
import './TitleScreen.css'

class TitleScreen extends Component {
  render() {
    return (
      <div className="TitleScreen">
      	<div className="section__header">
	     		<h1>Donald Trump: The Game</h1>
  		  	<img src="/img/whitehouse.png" role="presentation" />
      	</div>
      	<p className="title__start"><a className="button__next button">New Game</a></p>
        <p className="title__copyright">
        	&copy; 2016 The Boston Globe. <br />
        	Licensed by Nintendo of America Corp.</p>
      </div>
    )
  }
}

export default TitleScreen