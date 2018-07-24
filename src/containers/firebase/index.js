import React from 'react'
import { connect } from 'react-redux'
import api from '../../modules/api'

class Firebase extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    api.initializeApp()

    var newUserKey = api.database
      .ref()
      .child('users')
      .push().key

    api.database.ref(`/users/${newUserKey}`).set({
      username: 'first user',
      email: 'first@user.com',
      profile_picture: 'http://placehold.it/50x50'
    })
  }

  render() {
    return <div>Firebase</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Firebase)
