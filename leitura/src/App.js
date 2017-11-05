import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

const App = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/:category/:post_id" component={PostDetail} />
  </div>
);

export default App;
