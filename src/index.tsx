import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import App from './components/App'

import AppState from './store'

const store =  new AppState();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
