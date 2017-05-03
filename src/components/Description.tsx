import * as React from 'react'
import { Item } from '../store'

export default class Description extends React.Component<{text: Item}, {}> {
  render() {
    const text = this.props.text
    return (
      <div>
        <h1>DESCRIPTION</h1>
        <div>{text.content}</div>
      </div>
    )
  }
}
