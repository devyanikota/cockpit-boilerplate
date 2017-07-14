import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Timer } from '../components/Timer'

export default class Hacking extends Component {
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
          Hacking
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Timer />
            </div>
          </div>
        </div>
     </div>
    )
  }
}