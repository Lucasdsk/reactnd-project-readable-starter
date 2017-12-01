import api from './../API'


/**
listar comentários: comments/FETCH
votar positivo: comments/VOTE_UP
votar negativo: comments/VOTE_DOWN
criar comentário: comments/NEW
editar comentário: comments/EDIT
remover comentário: comments/DELETE
 */

export const actionTypes = {
  FETCH_COMMENTS_START: 'comments/FETCH_START',
  FETCH_COMMENTS: 'comments/FETCH',
  LIKE: 'comments/LIKE',
  UNLIKE: 'comments/UNLIKE',
  NEW_COMMENT: 'comments/NEW',
  EDIT_COMMENT: 'comments/EDIT',
  DELETE_COMMENT: 'comments/DELETE',
}

export const fetchComments = postId => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_COMMENTS_START })

  api.get(`posts/${postId}/comments`).then((response) => {
    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      payload: response.data,
    })
  })
}
