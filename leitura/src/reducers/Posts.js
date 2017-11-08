import { actionTypes } from './../actions/PostActions'

const prevState = {
  byId: {},
  allIds: {},
}

export default function (state = prevState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        byId: action.payload.reduce((prev, curr) => ({
          ...prev,
          [curr.id]: {
            ...curr,
          },
        }), {}),
        allIds: action.payload.map(post => post.id),
      }

    default:
      return state
  }
}
