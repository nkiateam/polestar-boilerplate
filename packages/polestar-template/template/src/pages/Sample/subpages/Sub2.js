import React from 'react';
import { Link } from 'react-router-dom';

import RouteWithSubRoutes from 'RouteWithSubRoutes';

const Sub2 = ({ routes }) => (
    <div>
        <h2>Sub2</h2>
        <ul>
            <li><Link to="/sample/sub2/sub2_1">Sub2_1</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </div>
);

export default Sub2;
