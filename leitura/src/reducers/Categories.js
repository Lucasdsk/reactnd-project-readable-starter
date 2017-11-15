import { actionTypes } from './../actions/CategoriesActions'

const prevState = {
  selectedCategory: '',
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
        ...state,
        list: [
          ...payload.categories,
        ],
      }

    case actionTypes.SELECT_CATEGORY: {
      if (payload !== state.selectedCategory) {
        return {
          ...state,
          selectedCategory: payload,
        }
      }

      return {
        ...state,
        selectedCategory: '',
      }
    }

    default:
      return state
  }
}
