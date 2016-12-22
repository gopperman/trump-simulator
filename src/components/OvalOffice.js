import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js'

class OvalOffice extends Component {
  render() {
    return (
		<div className="OvalOffice">
			<div className="section__header">
				<h1>OvalOffice</h1>
				<img src="/img/ovaloffice.jpg" role="presentation" />
				<Scoreboard />
			</div>
		</div>
    )
  }
}

export default OvalOffice