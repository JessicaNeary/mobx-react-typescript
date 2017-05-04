import * as React from 'react'
import { Item } from '../interfaces'
import { Col } from 'react-bootstrap'

import EditableDiv from './EditableDiv'

export default class Description extends React.Component<{text: Item}, {}> {
  render() {
    return (
      <Col md={6}>
        <h5 className='subheading'>DESCRIPTION:</h5>
        <EditableDiv text={this.props.text}/>
      </Col>
    )
  }
}
