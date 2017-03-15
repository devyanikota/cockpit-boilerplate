import React, { Component } from 'react'
import { Lorem } from '../helpers/Lorem'

export class LoremBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.updateText = this.updateText.bind(this)
    this.unsafeRender = this.unsafeRender.bind(this)
  }
  updateText(resp) {
    this.setState({text: resp})
  }
  unsafeRender() {
    return {__html: this.state.text}
  }
  componentWillMount() {
    Lorem(this.props.name, this.updateText)
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            Contents of {this.props.name}
          </h3>
        </div>
        <div className="panel-body">
          <div dangerouslySetInnerHTML={this.unsafeRender()} />
        </div>
      </div>
    )
  }
}
