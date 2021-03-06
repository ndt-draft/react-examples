import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

// @see https://github.com/facebook/create-react-app/issues/2317
const store = createStore(rootReducer, initialState, composedEnhancers)

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

export default store
