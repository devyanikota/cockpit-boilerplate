import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toUTCString()
    }
  }
  componentDidMount() {
    var self = this
    var interval = setInterval(function () {
      let newDate = new Date();
      let dateString = newDate.toUTCString();
      self.setState({time: dateString})
    }, 1000)
    this.setState({intervalId: interval})
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }
  render() {
    return (
      <div>
        <TimeBox time={this.state.time} />
      </div>
    )
  }
}

const TimeBox = ({time}) => {
  return (
    <div>
      The current time is: {time}
    </div>
  )
}
