import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import {
  Dimmer,
  Loader,
  Segment,
  Grid,
  Button,
  Card,
} from 'semantic-ui-react'
import * as PostsActions from './../actions/PostActions'
import * as CommentsActions from './../actions/CommentsActions'
import { getCommentsSelector } from './../selectors'

class PostDetail extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    const { post_id } = this.props.match.params
    this.props.actions.fetchPosts(post_id)
    this.props.actions.fetchComments(post_id)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  render() {
    const { post, loading, comments } = this.props
    return (
      loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
            { /* componentizar esse card */ }
              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    {post.title}
                  </Card.Header>
                  <Card.Content>
                    <Card.Meta>
                      {post.author}
                    </Card.Meta>
                    <Card.Meta>
                      {moment(post.timestamp).startOf('day').fromNow()}
                    </Card.Meta>
                  </Card.Content>
                  <Card.Description>
                    {post.body}
                  </Card.Description>
                </Card.Content>
              </Card>

              { comments.length }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    )
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array,
  loading: PropTypes.bool,
}

function mapStateToProps({ posts, comments }, ownProps) {
  const { post } = posts
  const loading = posts.loadingPosts || comments.loadingComments
  return {
    post,
    comments: getCommentsSelector(comments, post.id),
    loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...PostsActions,
      ...CommentsActions,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail))
