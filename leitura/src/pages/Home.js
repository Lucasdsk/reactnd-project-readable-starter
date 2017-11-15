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
  Dropdown,
} from 'semantic-ui-react'
import * as PostsActions from './../actions/PostActions'
import * as CategoriesActions from './../actions/CategoriesActions'
import { getPostsSelector } from './../selectors'
import PostList from './../components/PostList'
import NoData from './../components/NoData'

class Home extends PureComponent {
  componentDidMount() {
    const { actions } = this.props

    actions.fetchCategories()
    actions.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      this.props.actions.fetchPostsByCategory(nextProps.selectedCategory)
    }
  }

  render() {
    const {
      posts,
      categories,
      actions,
      selectedCategory,
      postFilter,
    } = this.props
    return (
      <Container>
        <Header as="h1">
          Projeto Leitura
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              {
                !!posts.length ?
                  <PostList data={posts} />
                  : <NoData message="Nenhum post encontrado." />
              }
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <Dropdown
                  placeholder="Select a filter"
                  fluid
                  selection
                  options={postFilter}
                  onChange={(evt, data) => actions.filterPosts(data.value)}
                />
                <List divided selection>
                  {
                    categories.map(category => (
                      <List.Item
                        key={category.path}
                        onClick={() => actions.selectCategory(category.path)}
                        active={category.path === selectedCategory}
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
    selectedCategory: categories.selectedCategory,
    postFilter: posts.postFilter,
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
  selectedCategory: PropTypes.string,
  postFilter: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
