import { createSelector } from 'reselect'

const getPostsById = state => state.posts.byId

// eslint-disable-next-line
export const getPosts = createSelector(
  [getPostsById],
  posts => Object.keys(posts).map(postId => posts[postId]),
)
