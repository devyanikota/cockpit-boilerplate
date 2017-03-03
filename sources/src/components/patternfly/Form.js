import React, { Component } from 'react'

export class HorizontalElement extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-1 control-label"
          htmlFor={this.props.htmlFor}>
          {this.props.labelText}
        </label>
        <div className="col-sm-10">
          {this.props.inner}
        </div>
      </div>
    )
  }
}
