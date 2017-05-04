import * as React from 'react'
import DevTools from 'mobx-react-devtools'

import SupplierDetails from './SupplierDetails'

import { AppState } from '../store'

export default class App extends React.Component<{store: AppState}, {}> {
  render() {
    const data = this.props.store.data
    return (
      <div>
        <SupplierDetails supplier={data} />
        <DevTools />
      </div>
    )
  }
}
