import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, Button, Label, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Post = ({ data, history }) => (
  <Card
    fluid
    onClick={() => history.push(`/${data.category}/${data.id}`)}
  >
    <Card.Content>
      <Label attached="top left">{data.category}</Label>
      <Card.Header>
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
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button label={2} icon="like outline" labelPosition="right" />
      <Button label={3} icon="dislike outline" labelPosition="right" />
      <Label>
        <Icon name="comments" /> 2
      </Label>
    </Card.Content>
  </Card>
)

Post.propTypes = {
  data: PropTypes.object,
}

export default withRouter(Post)
