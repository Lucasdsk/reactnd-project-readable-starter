import { FILTER_POSTS } from './../utils'
import { actionTypes } from './../actions/PostActions'
import { actionTypes as categoriesActionTypes } from './../actions/CategoriesActions'

const prevState = {
  byId: {},
  allIds: {},
  filterSelected: '',
  postFilter: [
    {
      text: 'None',
      value: '',
    },
    {
      text: 'More liked',
      value: FILTER_POSTS.VOTE_SCORE_UP,
    },
    {
      text: 'More unliked',
      value: FILTER_POSTS.VOTE_SCORE_DOWN,
    },
    {
      text: 'More commented',
      value: FILTER_POSTS.COMMENTS,
    },
  ],
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

    case actionTypes.FILTER:
      return {
        ...state,
        filterSelected: payload,
      }

    default:
      return state
  }
}
