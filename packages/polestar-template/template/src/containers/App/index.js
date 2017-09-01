import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { routes, RouteWithSubRoutes } from '../../routes';

import Home from './components/Home';

import logo from '../../styles/images/polestarlogo.png';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="menulogo">
                        <a href="/">
                            <img src={logo} />
                        </a>
                    </div>
                    <ul className="menunav-list">
                        <li className="menu-link">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/redux-saga">Redux 비동기</Link>               
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" render={() => (
                            <Home />
                        )}/>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;