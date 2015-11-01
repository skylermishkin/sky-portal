// polyfill a full ES6 environment
// see: http://babeljs.io/docs/usage/polyfill/
import 'babel-core/polyfill'
// friendly css reset
// see: https://necolas.github.io/normalize.css/
import 'normalize.css'
// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
// local imports
import Root from './components/Root'


// render the root component into the 'app' div
ReactDOM.render(<Root />, document.getElementById('app'))
