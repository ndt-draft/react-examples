import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import store, { history } from './store'
import './styles/css/index.css'

const target = document.getElementById('root')

// @see https://github.com/davezuko/react-redux-starter-kit/blob/master/src/main.js
let renderApp = () => {
  const App = require('./containers/app').default
  const routes = require('./routes').default

  render(
    <AppContainer>
      <App store={store} history={history} routes={routes} />
    </AppContainer>,
    target
  )
}

// @see https://github.com/facebook/create-react-app/issues/2317
if (module.hot) {
  module.hot.accept(['./containers/app', './routes'], () => {
    renderApp()
  })
}

renderApp()
