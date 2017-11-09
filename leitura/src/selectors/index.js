import { createSelector } from 'reselect'

const getPostsById = state => state.byId

// eslint-disable-next-line
export const getPostsSelector = createSelector(
  [getPostsById],
  (posts) => {
    console.log('getPostsSelector')
    return Object.keys(posts).map(postId => posts[postId])
  },
)
