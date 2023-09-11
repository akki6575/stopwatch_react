// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {isTimerRunning: false, timeElapsedInSeconds: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onResetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const sec = Math.floor(timeElapsedInSeconds % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const min = Math.floor(timeElapsedInSeconds / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">StopWatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
              />
              <h1 className="heading">Timer</h1>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="button start-button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button "
                onClick={this.onResetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
