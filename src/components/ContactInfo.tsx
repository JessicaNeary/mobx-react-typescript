import * as React from 'react'

import EditableDiv from './EditableDiv'

import { Supplier } from '../interfaces'

export default class ContactInfo extends React.Component<{supplier: Supplier}, {}> {
  render() {
    const supplier = this.props.supplier
    return (
      <ul className='ContactInfo'>
        <li className='address'><EditableDiv text={supplier.address} /></li>
        <li className='phone'><EditableDiv text={supplier.phone} /></li>
      </ul>
    )
  }
}
