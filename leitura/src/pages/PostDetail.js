import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Segment,
  Grid,
  Button,
  Card,
} from 'semantic-ui-react'
import * as PostsActions from './../actions/PostActions'

class PostDetail extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.actions.fetchPosts(post_id)
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Card>
              card
              {/* <Card.Header>
                {data.title}
              </Card.Header>
              <Card.Content>
                <Card.Meta>
                  {data.author}
                </Card.Meta>
                <Card.Meta>
                  {moment(data.timestamp).startOf('day').fromNow()}
                </Card.Meta>
              </Card.Content>
              <Card.Description>
                {data.body}
              </Card.Description> */}
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...PostsActions,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail))
