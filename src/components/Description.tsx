import * as React from 'react'
import { Item } from '../store'
import { observer } from 'mobx-react'

import EditableDiv from './EditableDiv'

export default class Description extends React.Component<{text: Item}, {}> {
  render() {
    return (
      <div>
        <h1>DESCRIPTION</h1>
        <EditableDiv text={this.props.text}/>
      </div>
    )
  }
}
