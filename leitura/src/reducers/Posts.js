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
  loadingPosts: false,
  deletePost: false,
}

export default function (state = prevState, action) {
  const {
    type,
    payload,
  } = action

  switch (type) {
    case actionTypes.FETCH_POSTS_START:
      return {
        ...state,
        loadingPosts: true,
      }

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
        loadingPosts: false,
      }

    case actionTypes.FILTER:
      return {
        ...state,
        filterSelected: payload,
      }

    case actionTypes.DETAIL:
      return {
        ...state,
        post: payload,
        loadingPosts: false,
      }

    case actionTypes.UP_VOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload]: {
            ...state.byId[payload],
            voteScore: state.byId[payload].voteScore + 1,
          },
        },
      }

    case actionTypes.DOWN_VOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload]: {
            ...state.byId[payload],
            voteScore: state.byId[payload].voteScore - 1,
          },
        },
      }

    case actionTypes.DELETE_POST:
      return {
        ...state,
        deletePost: true,
      }

    case actionTypes.DELETE_POST_SUCCESS:
    case actionTypes.DELETE_POST_CANCEL:
      return {
        ...state,
        deletePost: false,
      }

    default:
      return state
  }
}
