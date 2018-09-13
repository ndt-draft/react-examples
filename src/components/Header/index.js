import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/ref">RefEx</Link>
    <Link to="/firebase">Firebase</Link>
    <Link to="/optimizely">Optimizely</Link>
    <Link to="/formik">Formik</Link>
  </header>
)

export default Header
