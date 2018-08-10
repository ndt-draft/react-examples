import React from 'react'
import { connect } from 'react-redux'

class FirebaseLogin extends React.Component {
  componentDidMount() {}

  render() {
    return <div>Login</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseLogin)
