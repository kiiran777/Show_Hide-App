// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstname = () => {
    this.setState(oldState => ({isFirstName: !oldState.isFirstName}))
  }

  onLastname = () => {
    this.setState(oldState => ({isLastName: !oldState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div>
            <button className="btn" type="button" onClick={this.onFirstname}>
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div>
            <button className="btn" type="button" onClick={this.onLastname}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
