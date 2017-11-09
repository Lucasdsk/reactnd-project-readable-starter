import { actionTypes } from './../actions/PostActions'
import { actionTypes as categoriesActionTypes } from './../actions/CategoriesActions'

const prevState = {
  byId: {},
  allIds: {},
}

export default function (state = prevState, action) {
  const {
    type,
    payload,
  } = action

  switch (type) {
    case actionTypes.FETCH_POSTS:
    case categoriesActionTypes.FETCH_POSTS:
      return {
        ...state,
        byId: payload.reduce((prev, curr) => ({
          ...prev,
          [curr.id]: {
            ...curr,
          },
        }), {}),
        allIds: payload.map(post => post.id),
      }

    default:
      return state
  }
}
