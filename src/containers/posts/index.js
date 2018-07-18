import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, updatePostsData } from '../../modules/posts'

class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Posts'
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.subreddit)
  }

  componentWillUnmount() {
    alert('I knew Dan lied about hot reloading posts')
  }

  changeSubreddit = e => {
    this.props.fetchPosts(e.target.value)
  }

  changeTitle = e => {
    this.setState({
      title: 'New Posts 1'
    })
  }

  render() {
    console.log('posts render')
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Change posts title</button>
        <select value={this.props.subreddit} onChange={this.changeSubreddit}>
          {this.props.subreddits.map(subreddit => (
            <option key={subreddit} value={subreddit}>
              {subreddit}
            </option>
          ))}
        </select>
        {this.props.posts.map((post, key) => (
          <div key={key}>
            <a href={post.data.url} target="_blank">
              {post.data.title}
            </a>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  subreddit: state.posts.subreddit,
  subreddits: state.posts.subreddits
})

const mapDispatchToProps = {
  fetchPosts,
  updatePostsData
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
