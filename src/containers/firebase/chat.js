import React from 'react'
import { connect } from 'react-redux'
import api from '../../modules/api'

class FirebaseChat extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      messages: {}
    }
  }

  componentDidMount() {
    let self = this

    // Initialize Firebase
    api.initializeApp()

    let messagesRef = api.database.ref('/messages')
    messagesRef.on('child_added', data => {
      let messages = { ...self.state.messages }
      messages[data.key] = {
        message: data.val().message
      }
      self.setState({
        messages: messages
      })
    })

    return api.database
      .ref('/messages/')
      .once('value')
      .then(function(snapshot) {
        let messages = snapshot.val() || []
        self.setState({
          messages
        })
      })
  }

  addMessage = e => {
    e.preventDefault()

    var newMessageKey = api.database
      .ref()
      .child('messages')
      .push().key

    api.database.ref(`/messages/${newMessageKey}`).set({
      message: this.state.message
    })

    this.setState({
      message: ''
    })
  }

  changeMessage = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.messages).map(key => (
          <div key={key}>{this.state.messages[key].message}</div>
        ))}
        <form onSubmit={this.addMessage}>
          <input value={this.state.message} onChange={this.changeMessage} />
          <button type="submit">Add message</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseChat)
