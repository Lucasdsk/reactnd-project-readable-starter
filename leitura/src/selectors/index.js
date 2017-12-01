import { createSelector } from 'reselect'
import { FILTER_POSTS } from './../utils'

const listFiltered = list => (filter) => {
  switch (filter) {
    case FILTER_POSTS.VOTE_SCORE_UP:
      return list.sort((x, y) => y.voteScore - x.voteScore)
    case FILTER_POSTS.VOTE_SCORE_DOWN:
      return list.sort((x, y) => x.voteScore - y.voteScore)
    case FILTER_POSTS.COMMENTS:
      return list.sort((x, y) => y.commentCount - x.commentCount)
    case FILTER_POSTS.MORE_RECENT:
      return list.sort((x, y) => y.timestamp - x.timestamp)
    default:
      return list
  }
}

const getPostsById = state => state.byId
const getFilterSelected = state => state.filterSelected
const getCommentsByParentId = (state, postId) => {
  return state.byParentId[postId] || state.byParentId
}

// eslint-disable-next-line
export const getPostsSelector = createSelector(
  [getFilterSelected, getPostsById],
  (filter, posts) => {
    const newPosts = Object.keys(posts).map(postId => posts[postId])
    const newList = listFiltered(newPosts)
    return newList(filter)
  },
)

export const getCommentsSelector = createSelector(
  [getCommentsByParentId],
  (comments) => {
    return Object.keys(comments).map(commentId => comments[commentId])
  },
)
