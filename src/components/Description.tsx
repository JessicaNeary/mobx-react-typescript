import * as React from 'react'
import AppState from '../store'


export default class Description extends React.Component<{text: string}, {}> {
  render() {
    return (
      <div>
        <h1>DESCRIPTION</h1>
        <div>{this.props.text}</div>
      </div>
    )
  }
}
