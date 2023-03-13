// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onChangeInput = event => {
    const inputValue = event.target.value
    const len = inputValue.length
    this.setState({lettersCount: len})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-label">
            Enter the phrase
            <br />
            <input
              type="text"
              className="input-element"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
            />
          </label>
          <div className="count-container">
            <p className="letters-count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
