import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import Post from './Post';

const PostList = ({ data }) => (
  <Grid columns={4}>
    <Grid.Row>
      {
        data.map(post => (
          <Grid.Column key={post.id}>
            <Post data={post} />
          </Grid.Column>
        ))
      }
    </Grid.Row>
  </Grid>
);

PostList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PostList;
