import React from 'react'
import { render } from 'react-dom'
import store, { history } from './store'
import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.getElementById('root')

let renderApp = () => {
  const App = require('./containers/app').default
  const routes = require('./routes').default

  render(<App store={store} history={history} routes={routes} />, target)
}

// @see https://github.com/facebook/create-react-app/issues/2317
if (module.hot) {
  module.hot.accept(['./containers/app', './routes'], () => {
    renderApp()
  })
}

renderApp()
