import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from "styled-components"
import { Card, Button, Label, Icon, Modal, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const RenderModal = () => (
  <Modal trigger={<Icon name="trash" size="large" />} basic size="small">
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <p>Você tem certeza que deseja excluir este post?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="red" inverted>
        <Icon name="remove" /> Não
      </Button>
      <Button color="green" inverted>
        <Icon name="checkmark" /> Sim
      </Button>
    </Modal.Actions>
  </Modal>
)

const Post = ({
  data,
  history,
  onUpVote,
  onDownVote
}) => (
  <StyledCard
    fluid
  >
    <Card.Content>
      <Label attached="top left">{data.category}</Label>
      <Card.Header>
        {data.title}
        <Label attached="top right" className="actions">
          <Icon name="pencil square" size="large" />
          {RenderModal()}
        </Label>
      </Card.Header>
      <Card.Content onClick={() => history.push(`/${data.category}/${data.id}`)}>
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
      <Label>
        <Icon name="comments" /> {data.commentCount}
      </Label>
      <Button.Group className="buttonGroup" floated="right">
        <Button onClick={() => onDownVote(data.id)} icon="dislike outline" color="red" />
        <Button.Or text={data.voteScore} />
        <Button onClick={() => onUpVote(data.id)} icon="like outline" color="green" />
      </Button.Group>
    </Card.Content>
  </StyledCard>
)

const StyledCard = styled(Card)`
  cursor: pointer;

  .actions {
    .icon.trash {
      margin: 0;
    }
  }

  .buttonGroup {
    .button {
      .icon {
        &.like:hover {
          color: #fff;
        }
      }
    }
  }
`

Post.propTypes = {
  data: PropTypes.object.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
}

export default withRouter(Post)
