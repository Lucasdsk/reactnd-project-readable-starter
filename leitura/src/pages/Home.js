import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Segment,
  List,
  Grid,
} from 'semantic-ui-react'
import * as PostsActions from './../actions/PostActions'
import * as CategoriesActions from './../actions/CategoriesActions'
import { getPostsSelector } from './../selectors'
import PostList from './../components/PostList'

export class Home extends PureComponent {
  componentDidMount() {
    const { actions } = this.props

    actions.fetchCategories()
    actions.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps)
  }

  render() {
    return (
      <Container>
        <Header as="h1">
          Projeto Leitura
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <PostList data={this.props.posts} />
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <Link to="/react/123">
                  Detalhes
                </Link>
                <List divided selection>
                  {
                    this.props.categories.map(category => (
                      <List.Item
                        key={category.path}
                        onClick={() => this.props.actions.fetchPostsByCategory(category.path)}
                      >
                        {category.name}
                      </List.Item>
                    ))
                  }
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: getPostsSelector(posts),
    categories: categories.list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...PostsActions,
      ...CategoriesActions,
    }, dispatch),
  }
}

Home.propTypes = {
  actions: PropTypes.object,
  posts: PropTypes.array,
  categories: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
