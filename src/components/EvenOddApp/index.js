// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="app-container">
          <h1>Count {count}</h1>
          <p>Count is {displayText}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
