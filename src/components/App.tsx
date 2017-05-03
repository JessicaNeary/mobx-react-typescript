import * as React from 'react'
import DevTools from 'mobx-react-devtools'

import Description from './Description'

import { AppState, Item } from '../store'

export default class App extends React.Component<{store: AppState}, {}> {
  render() {
    return (
      <div>
        <Description text={this.props.store.description} />
        <DevTools />
      </div>
    )
  }
}
