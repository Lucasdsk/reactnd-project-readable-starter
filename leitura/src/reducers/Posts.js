import { FILTER_POSTS } from './../utils'
import { actionTypes } from './../actions/PostActions'
import { actionTypes as categoriesActionTypes } from './../actions/CategoriesActions'

const prevState = {
  post: {},
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
    {
      text: 'More recent',
      value: FILTER_POSTS.MORE_RECENT,
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

    case actionTypes.DETAIL:
      return {
        post: payload,
      }

    default:
      return state
  }
}
