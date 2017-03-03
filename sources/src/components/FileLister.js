import React, { Component } from 'react'
import { Ls } from '../helpers/Ls'
import { Horizontal, HorizontalElement } from './patternfly/Form'

export class FileLister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path:"/live_data",
      checked: false
    }
    this.onUpdate = this.onUpdate.bind(this)
  }
  onUpdate(data) {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <h3>
          File listing
        </h3>
        <Horizontal>
          <InputBox
            path={this.state.path}
            onUpdate={this.onUpdate}
          />
          <Switch
            onUpdate={this.onUpdate}
          />
        </Horizontal>
        <ListDir
          path={this.state.path}
          full={this.state.checked}
        />
      </div>
    )
  }
}

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.props.onUpdate({path: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <HorizontalElement
        htmlFor="inputBox"
        labelText="Path to list:"
        inner={
          <input type="text"
            id="textInput-markup"
            className="form-control"
            value={this.props.path}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            />
        }
      />
    )
  }
}

class Switch extends Component {
  constructor(props) {
    super(props)
    this.toggleChecked = this.toggleChecked.bind(this)
  }
  toggleChecked(e) {
    let value = e.target.type === 'checkbox' ?
      e.target.checked : e.target.value;
    console.log(value)
    this.props.onUpdate({checked: value})
  }
  render() {
    return (
      <HorizontalElement
        htmlFor="checkbox"
        labelText="ls -l:"
        inner={
          <input className="bootstrap-switch"
            type="checkbox"
            onChange={this.toggleChecked}
          />
        }
      />
    )
  }
}

class ListDir extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
    this.ListDir = this.ListDir.bind(this)
    this.ListDir(this.props.path, this.props.full)
  }
  ListDir(path, full) {
    let self = this
    let update = (resp) => {
      self.setState({data: resp})
    }
    if (full) {
      Ls.full(update, path)
    } else {
      Ls.brief(update, path)
    }
  }
  componentWillReceiveProps(nextprops) {
    this.ListDir(nextprops.path, nextprops.full)
  }
  render() {
    let files = []
    if (this.state.data != null) {
      this.state.data.split('\n').forEach(function(f) {
        files.push(
          <ListItem key={f} file={f} />
        )
      })
    }

    return (
      <div>
        <h3>
          Files in {this.props.path}
        </h3>
        <ul className="list-group">
          {files}
        </ul>
      </div>
    )
  }
}

const ListItem = ({file}) => {
  return (
    <li className="list-group-item">
      {file}
    </li>
  )
}
