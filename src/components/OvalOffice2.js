import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js'
import './../styles/OvalOffice.css'

class OvalOffice2 extends Component {
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
				<p>Mr. President, protesters have blocked access to the Dakota Access Pipeline, or DAPL. Tensions have been flaring between the local authorities and the protestors. Both protestors and the police are worried about violence.</p>
				<ul className="event__options">
					<li><a className="event__button">Call the EPA to explore alternatives</a></li>
					<li><a className="event__button"> Deploy the National Guard to break up the protests</a></li>
					<li><a className="event__button event__button--tweet">Tweet</a></li>
				</ul>
				<div className="event__intellegence center">
					<a className="event__helpTip highlighted">Read an intellegence briefing</a>
	            	<div className="event__helpDescription">
	              	<p>The pipeline was previously planned to go through Bismark, North Dakota, but was rerouted because of environmental concerns. The DAPL is a joint venture between Energy Transfer Partners, Sunoco, and Phillips 66.</p>
              	</div>
            </div>
			</div>
		</div>
    )
  }
}

export default OvalOffice2