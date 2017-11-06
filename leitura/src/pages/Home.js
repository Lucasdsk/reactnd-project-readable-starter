import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as PostsActions from './../actions/PostActions'
import {
  Header,
  Container,
} from 'semantic-ui-react'
import PostList from './../components/PostList'

const Posts = [
  {
      "id": "8xf0y6ziyjabvozdd253nd",
      "timestamp": 1467166872634,
      "title": "Udacity is the best place to learn React",
      "body": "Everyone says so after all.",
      "author": "thingtwo",
      "category": "react",
      "voteScore": 6,
      "deleted": false,
      "commentCount": 2
  },
  {
      "id": "6ni6ok3ym7mf1p33lnez",
      "timestamp": 1468479767190,
      "title": "Learn Redux in 10 minutes!",
      "body": "Just kidding. It takes more than 10 minutes to learn technology.",
      "author": "thingone",
      "category": "redux",
      "voteScore": -5,
      "deleted": false,
      "commentCount": 0
  }
]

export class Home extends Component {

  componentDidMount() {
    const { actions } = this.props

    actions.fetchPosts()
  }

  render() {
    return (
      <Container>
        <Header as="h1">
          Projeto Leitura
        </Header>
        <Link to="/react/123">
          Detalhes
        </Link>

        <PostList data={Posts} />
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostsActions, dispatch),
  }
}

export default connect(undefined, mapDispatchToProps)(Home)
