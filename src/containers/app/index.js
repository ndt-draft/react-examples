import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'App'
    }
  }

  componentWillUnmount() {
    alert('I knew Dan lied about hot reloading.')
  }

  changeTitle = e => {
    this.setState({
      title: 'New App 2'
    })
  }

  render() {
    console.log('app render')
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <h1>{this.state.title}</h1>
            <button onClick={this.changeTitle}>Change title</button>
            <Switch>
              {this.props.routes.map((route, i) =>
                route.routes.map((childRoute, j) => (
                  <route.layout key={childRoute.path} {...childRoute} />
                ))
              )}
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
