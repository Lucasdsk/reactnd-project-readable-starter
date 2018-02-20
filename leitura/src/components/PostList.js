import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import Post from './Post'

const PostList = ({
  data,
  onUpVote,
  onDownVote,
  modalOpened,
  onRemovePost,
  handleRemovePost,
  cancelRemovePost
}) => (
  <Grid columns={3}>
    <Grid.Row>
      {
        data.map(post => (
          <Grid.Column mobile={16} tablet={8} computer={5} key={post.id}>
            <Post data={post} onUpVote={onUpVote} onDownVote={onDownVote} />
          </Grid.Column>
        ))
      }
    </Grid.Row>
  </Grid>
)

PostList.propTypes = {
  data: PropTypes.array.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  modalOpened: PropTypes.bool,
  onRemovePost: PropTypes.func,
  handleRemovePost: PropTypes.func,
  cancelRemovePost: PropTypes.func
}

export default PostList
