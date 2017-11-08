import { combineReducers } from 'redux'
import comments from './Comments'
import posts from './Posts'

export default combineReducers({
  comments,
  posts,
})
