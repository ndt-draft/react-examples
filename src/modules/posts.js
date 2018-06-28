import fetch from 'cross-fetch'

// Constants
export const UPDATE_POSTS_DATA = 'posts/UPDATE_POSTS_DATA'

// Actions
export const updatePostsData = payload => ({
  type: UPDATE_POSTS_DATA,
  payload
})

// Thunks
export const fetchPosts = subreddit => {
  return async dispatch => {
    let data = await fetch(`https://www.reddit.com/r/${subreddit}.json`).then(
      response => response.json()
    )

    dispatch(
      updatePostsData({
        posts: data.data.children,
        subreddit: subreddit
      })
    )
  }
}

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_POSTS_DATA]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

// Reducer
const initialState = {
  posts: [],
  subreddit: 'reactjs',
  subreddits: ['reactjs', 'frontend']
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
