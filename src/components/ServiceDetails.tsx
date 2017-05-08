import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import EditableDiv from './EditableDiv'
import Description from './Description'
import ContactInfo from './ContactInfo'
import Images from './Images'

import { Service } from '../interfaces'

export default class ServiceDetails extends React.Component<{service: Service}, {}> {
  render() {
    const service = this.props.service
    return (
      <Row className='ServiceDetails'>
        <Col>
          <img src='http://placehold.it/150x150' />
        </Col>
        <Col>
          <h5 className='name'>
            <EditableDiv text={service.name} />
          </h5>
        </Col>
      </Row>
    )
  }
}
