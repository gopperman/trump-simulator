import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js'
import './../styles/OvalOffice.css'

class OvalOffice extends Component {
  render() {
    return (
		<div className="OvalOffice">
			<div className="section__header">
				<h1>The Oval Office</h1>
				<img src="/img/ovaloffice.png" role="presentation" />
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
				<div className="event__intellegence center">
					<a className="event__helpTip highlighted">Read an intellegence briefing</a>
	            	<div className="event__helpDescription">
	              	<p>Taiwan is a friend of the United States, but officially part of China. If you take the call, you may anger China, but demonstrate you are a tough and fearless leader. Refusing to take the call will show respect and deference to China.The 'One China' policy has been in effect for over three decades.</p>
              	</div>
            </div>
			</div>
		</div>
    )
  }
}

export default OvalOffice