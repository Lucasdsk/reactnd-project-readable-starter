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
  FETCH_POSTS: 'posts/FETCH',
  LIKE: 'posts/LIKE',
  UNLIKE: 'posts/UNLIKE',
  NEW_POST: 'posts/NEW',
  EDIT_POST: 'posts/EDIT',
  DELETE_POST: 'posts/DELETE',
  FILTER: 'posts/FILTER',
}

export const fetchPosts = () => (dispatch) => {
  api.get('posts/').then((response) => {
    dispatch({
      type: actionTypes.FETCH_POSTS,
      payload: response.data,
    })
  })
}

export const filterPosts = filter => (dispatch) => {
  dispatch({
    type: actionTypes.FILTER,
    payload: filter,
  })
}
