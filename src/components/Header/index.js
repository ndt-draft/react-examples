import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/ref">RefEx</Link>
  </header>
)

export default Header
