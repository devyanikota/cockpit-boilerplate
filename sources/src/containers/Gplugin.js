import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LoremBox } from '../components/LoremBox'

export default class Gplugin extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h2>
          Gluster plugin
        </h2>
        <LoremBox name="introduction"/>
     </div>
    )
  }
}
