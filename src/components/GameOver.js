import React, { Component } from 'react'
import './../styles/GameOver.css'

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        <div className="section__header">
        	<img src="/img/thumbsup.jpg" role="presentation" />
        </div>
        <h2>Congratulations!</h2>
        <p>You successfully ran the country. The Trump family business is thriving, and is now worth over $1,000,0000,000. Your legacy will be preserved for centuries to come. Very nice!</p>
        <div className="credits">
        	<h3>Made by:</h3>
        	<p>
        		Graphics<br />
        		<span className="highlighted">Kelsey Kronmiller</span>
        	</p>
        	<p>
        		Code<br />
        		<span className="highlighted">Greg Opperman</span>
        	</p>
	        <p>Thanks for playing!</p>
        </div>
      </div>
    )
  }
}

export default GameOver