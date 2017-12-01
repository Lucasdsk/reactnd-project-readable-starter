import { actionTypes } from './../actions/CommentsActions'

const prevState = {
  categories: [],
  byParentId: {},
  allIds: {},
  loadingComments: false,
}

export default function (state = prevState, action) {
  const {
    type,
    payload,
  } = action

  switch (type) {
    case actionTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        loadingComments: true,
      }

    case actionTypes.FETCH_COMMENTS:
      return {
        ...state,
        byParentId: payload.reduce((prev, curr) => {
          const prevComments = prev[curr.parentId] || {}
          return ({
            ...prev,
            [curr.parentId]: {
              ...prevComments,
              [curr.id]: curr,
            },
          })
        }, {}),
        allIds: payload.map(comment => comment.id),
        loadingComments: false,
      }

    default:
      return state
  }
}
