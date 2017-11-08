import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RouteWithSubRoutes from 'RouteWithSubRoutes';
import routes from './routes';

const Sample = () => (
    <Router>
        <div>
            <h2>Sample</h2>
            <ul>
                <li><Link to="/sample/sub1">Sub1</Link></li>
                <li><Link to="/sample/sub2">Sub2</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default Sample;