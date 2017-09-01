import React from 'react';
import { Link } from 'react-router-dom';

import { RouteWithSubRoutes } from '../../../routes';

const About = ({ routes }) => (
  <div>
    <h2>About</h2>
    <ul>
      <li><Link to="/about/bus">Bus</Link></li>
      <li><Link to="/about/cart">Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

export default About;