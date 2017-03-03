import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LoremBox } from '../components/LoremBox'
import { FileLister } from '../components/FileLister'

export default class Files extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h2>
          File playground
        </h2>
        <LoremBox name="ipsum"/>
        <FileLister />
     </div>
    )
  }
}
