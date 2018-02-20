import api from './../API'

/*
listar posts: posts/FETCH
votar positivo: posts/VOTE_UP
votar negativo: posts/VOTE_DOWN
criar post: posts/NEW
editar post: posts/EDIT
remover post: posts/DELETE
*/

export const actionTypes = {
  FETCH_POSTS_START: 'posts/FETCH_START',
  FETCH_POSTS: 'posts/FETCH',
  UP_VOTE: 'posts/UP_VOTE',
  DOWN_VOTE: 'posts/DOWN_VOTE',
  NEW_POST: 'posts/NEW',
  EDIT_POST: 'posts/EDIT',
  DELETE_POST: 'posts/DELETE',
  DELETE_POST_SUCCESS: 'posts/DELETE_SUCCESS',
  DELETE_POST_CANCEL: 'posts/DELETE_CANCEL',
  FILTER: 'posts/FILTER',
  DETAIL: 'posts/DETAIL',
}

const votePost = (postId, option) => api.post(`posts/${postId}`, { option })

export const fetchPosts = postId => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_POSTS_START })

  if (postId) {
    api.get(`posts/${postId}`).then((response) => {
      dispatch({
        type: actionTypes.DETAIL,
        payload: response.data,
      })
    })
  } else {
    api.get('posts/').then((response) => {
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: response.data,
      })
    })
  }
}

export const filterPosts = filter => (dispatch) => {
  dispatch({
    type: actionTypes.FILTER,
    payload: filter,
  })
}

export const upVotePost = postId => (dispatch) => {
  votePost(postId, 'upVote').then(() => {
    dispatch({ type: actionTypes.UP_VOTE, payload: postId })
  })
}

export const downVotePost = postId => (dispatch) => {
  votePost(postId, 'downVote').then(() => {
    dispatch({ type: actionTypes.DOWN_VOTE, payload: postId })
  })
}

export const deletePost = (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_POST,
  })
}

export const fetchDeletePost = postId => (dispatch) => {
  api.delete(`posts/${postId}`).then(() => {
    dispatch({
      type: actionTypes.DELETE_POST_SUCCESS,
    })
  })
}

export const cancelDeletePost = (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_POST_CANCEL,
  })
}
