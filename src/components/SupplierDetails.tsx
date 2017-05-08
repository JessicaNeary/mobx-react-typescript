import * as React from 'react'

import EditableDiv from './EditableDiv'
import Description from './Description'
import ContactInfo from './ContactInfo'
import Images from './Images'
import ServicesList from './ServicesList'
import { Grid, Row, Col } from 'react-bootstrap'

import { Supplier } from '../interfaces'

export default class SupplierDetails extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <Grid className='SupplierDetails'>
        <h1 className='name'>
          <EditableDiv text={supplier.name} />
        </h1>
        <Row>
          <Description text={supplier.description} />
          <ContactInfo supplier={supplier} />
        </Row>
        <Images images={supplier.images} />
      </Grid>
    )
  }
}
