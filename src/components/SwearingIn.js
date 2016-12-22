import React, { Component } from 'react'
import './SwearingIn.css'

class SwearingIn extends Component {
  render() {
    return (
      <div className="SwearingIn">
      	<div className="section__header">
    			<h1>Inauguration Day</h1>
    			<img src="/img/inauguration.png" role="presentation" />
      	</div>
        <p>Hello, I'm John Roberts, Chief Justice of the Supreme Court. 
        Today is a very special day - your inauguration as President of the United States. 
        
        You were elected to this position in a historic landslide (if you exclude the millions of people who voted illegally).
        You have given your very profitable business to your two sons, Eric and Donald Jr.
        Eric respects you very much and will occassionally call you for business advice.</p>
        
        <p>You must now focus on the very difficult task of running the country.</p>
        
        <p>Donald Trump, it is time to...</p>
        
        <h2 className="maga">MAKE AMERICA GREAT AGAIN!!!</h2>

        <p className="center"><a className="button__next button">Take the Oath of Office</a></p>
      </div>
    )
  }
}

export default SwearingIn