import api from './../API'

export const actionTypes = {
  FETCH_CATEGORIES: 'categories/FETCH',
  FETCH_POSTS: 'categories/FETCH_POSTS',
}

export const fetchCategories = () => (dispatch) => {
  api.get('categories').then((response) => {
    dispatch({
      type: actionTypes.FETCH_CATEGORIES,
      payload: response.data,
    })
  })
}

export const fetchPostsByCategory = category => (dispatch) => {
  api.get(`${category}/posts`).then((response) => {
    dispatch({
      type: actionTypes.FETCH_POSTS,
      payload: response.data,
    })
  })
}
