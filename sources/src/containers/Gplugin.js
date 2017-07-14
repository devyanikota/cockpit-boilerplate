import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { HostName } from '../components/Hostname'

export default class Gplugin extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount() {
    console.log("Basic lifecycle -- componentWillMount")
  }
  render() {
    return (
      <div>
        <h2>
          The Gluster Plugin
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <HostName />
            </div>
          </div>
        </div>
     </div>
    )
  }
}
