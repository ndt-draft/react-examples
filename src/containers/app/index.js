import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Posts from '../posts'
import RefEx from '../ref'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/ref">RefEx</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/ref" component={RefEx} />
    </main>
  </div>
)

export default App
