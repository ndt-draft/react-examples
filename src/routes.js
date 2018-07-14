import DefaultLayout from './layouts/DefaultLayout'
import Home from './containers/home'
import About from './containers/about'
import Posts from './containers/posts'
import RefEx from './containers/ref'

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/about',
        component: About,
        exact: true
      },
      {
        path: '/posts',
        component: Posts,
        exact: true
      },
      {
        path: '/ref',
        component: RefEx,
        exact: true
      }
    ]
  }
]
