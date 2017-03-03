import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
        <div>
          Hello world!!
        </div>
     </div>
    )
  }
}
