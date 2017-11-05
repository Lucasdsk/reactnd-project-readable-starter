import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/react/123">
      Detalhes
    </Link>
  </div>
);

export default Home;
