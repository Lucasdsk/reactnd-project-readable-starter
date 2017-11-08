import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Header,
  Container,
} from 'semantic-ui-react'
import * as PostsActions from './../actions/PostActions'
import { getPosts } from './../selectors'
import PostList from './../components/PostList'

export class Home extends PureComponent {
  componentDidMount() {
    const { actions } = this.props

    actions.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
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

        <PostList data={this.props.posts} />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostsActions, dispatch),
  }
}

Home.propTypes = {
  actions: PropTypes.object,
  posts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
