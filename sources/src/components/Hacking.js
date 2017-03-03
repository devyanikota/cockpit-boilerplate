import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LoremBox } from './LoremBox'
import { Timer } from './Timer'

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
        <Timer />
        <LoremBox name="ipsum"/>
     </div>
    )
  }
}
