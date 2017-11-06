import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Post = ({ data }) => (
  <Card
    header={data.title}
    meta={data.category}
    description={data.body}
  />
);

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
