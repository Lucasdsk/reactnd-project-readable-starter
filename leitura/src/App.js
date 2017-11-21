import React from 'react'
import { Route } from 'react-router-dom'
import {
  Header,
  Container,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

const App = () => (
  <Container>
    <Header as="h1">
      Projeto Leitura
    </Header>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/:category/:post_id" component={PostDetail} />
    </div>
  </Container>
)

export default App
