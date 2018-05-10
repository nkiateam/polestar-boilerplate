import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RouteWithSubRoutes from 'RouteWithSubRoutes';
import Home from 'pages/Home';
import logo from 'styles/images/polestarlogo.png';

import routes from './routes';

class App extends Component {
    static propTypes = {
        width: PropTypes.number,
    };

    static defaultProps = {
        width: 100,
    };

    render() {
        return (
            <Router>
                <div>
                    <div className="menulogo">
                        <a href="/">
                            <img src={logo} alt="POLESTAR LOGO" />
                        </a>
                    </div>
                    <ul className="menunav-list">
                        <li className="menu-link">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/sample">Sample</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/redux-async">Redux 비동기</Link>
                        </li>
                    </ul>
                    <div className="content">
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home />
                            )}
                        />
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
