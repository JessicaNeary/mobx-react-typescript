import * as React from 'react'

import Description from './Description'
import EditableDiv from './EditableDiv'

import { Supplier } from '../interfaces'

export default class SupplierDetails extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <div className='SupplierDetails'>
        <h1 className='name'>
          <EditableDiv text={supplier.name} />
        </h1>
        <Description text={supplier.description} />
      </div>
    )
  }
}
