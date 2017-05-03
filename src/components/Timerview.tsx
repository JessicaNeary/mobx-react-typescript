import * as React from 'react';
import AppState from '../store'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
export default class TimerView extends React.Component<{store: AppState}, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.store.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.props.store.resetTimer();
     }
};
