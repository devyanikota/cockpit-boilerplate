import React, { Component } from 'react'
import { Hostname } from '../helpers/Dbus'

export class HostName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hostname:"",
    }
    this.onUpdate = this.onUpdate.bind(this)
    this.dbus = new Hostname()
    this.dbus.getHostname(this.onUpdate)
  }
  componentDidMount() {
    var self = this
    var interval = setInterval(function () {
      self.dbus.getHostname(self.onUpdate)
    }, 1000)
    this.setState({intervalId: interval})
  }
  onUpdate(data) {
    this.setState({hostname: data})
  }
  render() {
    return (
      <div>
        Hostname: {this.state.hostname}
      </div>
    )
  }
}
