import React, { Component } from 'react'
import { Ls } from '../helpers/Ls'
import { HorizontalElement } from './patternfly/Form'

export class FileLister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path:"/live_data",
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }
  handleChange(e) {
    this.setState({path: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
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
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-1 control-label"
              htmlFor="textInput-markup">
              Path to list:
            </label>
            <div className="col-sm-10">
              <input type="text"
                id="textInput-markup"
                className="form-control"
                value={this.state.path}
                checked={this.state.checked}
                onChange={this.handleChange}
                />
            </div>
          </div>
          <Switch
            onUpdate={this.onUpdate}
          />
        </form>
        <ListDir
          path={this.state.path}
          full={this.state.checked}
        />
      </div>
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
