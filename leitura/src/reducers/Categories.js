import { actionTypes } from './../actions/CategoriesActions'

const prevState = {
  list: [],
}

export default function (state = prevState, action) {
  const {
    payload,
    type,
  } = action

  switch (type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        list: [
          ...payload.categories,
        ],
      }

    default:
      return state
  }
}
