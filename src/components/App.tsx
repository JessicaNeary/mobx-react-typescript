import * as React from 'react'

import Timerview from './Timerview'
import Description from './Description'

import { AppState, Item } from '../store'

export default class App extends React.Component<{store: AppState}, {}> {
  render() {
    return (
      <div>
        <Description text={this.props.store.description} />
        <Timerview store={this.props.store} />
      </div>
    )
  }
}
