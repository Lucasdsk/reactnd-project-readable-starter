import { actionTypes } from './../actions/PostActions'

const prevState = {
  posts: [],
}

export default function (state = prevState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: [
          ...action.payload,
        ],
      }

    default:
      return state
  }
}
