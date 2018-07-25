import React from 'react'
import DefaultLayout from './DefaultLayout'
import FirebaseMenu from '../components/FirebaseMenu'

/**
 * @extends DefaultLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const FirebaseLayout = ({ component: Component, ...rest }) => (
  <DefaultLayout
    {...rest}
    component={matchProps => (
      <React.Fragment>
        <FirebaseMenu />
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
)

export default FirebaseLayout
