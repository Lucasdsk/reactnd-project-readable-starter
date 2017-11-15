import api from './../API'

export const actionTypes = {
  FETCH_CATEGORIES: 'categories/FETCH',
  FETCH_POSTS: 'categories/FETCH_POSTS',
  SELECT_CATEGORY: 'categories/SELECT',
}

export const fetchCategories = () => (dispatch) => {
  api.get('categories').then((response) => {
    dispatch({
      type: actionTypes.FETCH_CATEGORIES,
      payload: response.data,
    })
  })
}

export const selectCategory = category => (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_CATEGORY,
    payload: category,
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
