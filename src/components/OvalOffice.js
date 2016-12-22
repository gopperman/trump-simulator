import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js'
import './../styles/OvalOffice.css'

class OvalOffice extends Component {
  render() {
    return (
		<div className="OvalOffice">
			<div className="section__header">
				<h1>The Oval Office</h1>
				<img src="/img/ovaloffice.jpg" role="presentation" />
				<Scoreboard />
			</div>
			<div className="event">
				<p>Steve O'Bannon, Chief of Staff:</p>
				<p>Mr. President, we have received a phone call from the President of Taiwan. What would you like to do?</p>
				<ul className="event__options">
					<li><a className="event__button">Take the call</a></li>
					<li><a className="event__button"> Don't take the call</a></li>
					<li><a className="event__button event__button--tweet">Tweet</a></li>
				</ul>
			</div>
		</div>
    )
  }
}

export default OvalOffice