import { combineReducers } from 'redux'
import comments from './Comments'
import posts from './Posts'
import categories from './Categories'

export default combineReducers({
  comments,
  posts,
  categories,
})
