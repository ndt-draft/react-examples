import React from 'react'
import { Link } from 'react-router-dom'

const FirebaseMenu = () => (
  <nav>
    <Link to="/firebase/chat">Chat</Link>
    <Link to="/firebase/login">Login</Link>
  </nav>
)

export default FirebaseMenu
