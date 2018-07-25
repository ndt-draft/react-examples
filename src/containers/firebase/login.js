import React from 'react'
import { connect } from 'react-redux'
import api from '../../modules/api'

class FirebaseLogin extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    return <div>Login</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseLogin)
