import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid/v4';
import { Layout } from 'polestar-ui-kit';

import 'polestar-ui-kit/styles/polestar-theme.less';

import RouteWithSubRoutes from 'RouteWithSubRoutes';
import Home from 'pages/Home';
// import logo from 'styles/images/polestarlogo.png';

import routes from './routes';
import Header from './components/Header';
import BreadcrumbContainer from './components/BreadcrumbContainer';
import LeftSide from './components/LeftSide';
import Footer from './components/Footer';
import { AppProvider } from './contexts/AppContext';

class App extends Component {
    static propTypes = {
        width: PropTypes.number,
    };

    static defaultProps = {
        width: 100,
    };

    constructor(props) {
        super(props);

        this.layoutRef = React.createRef();
    }

    render() {
        return (
            <Router>
                <AppProvider>
                    <Layout
                        ref={this.layoutRef}
                        header={<Header />}
                        breadcrumb={<BreadcrumbContainer />}
                        footer={<Footer />}
                        leftside={{
                            content: <LeftSide />,
                            resizable: true,
                            width: 269,
                            minWidth: 200,
                            maxWidth: 700,
                            expandToggleButton: true,
                            onExpand: (width) => {
                                console.log('App onExpand', width);
                            },
                            onCollapse: () => {
                                console.log('App onCollapse');
                            },
                            onResize: (width) => {
                                console.log('App onResize', width);
                            },
                        }}
                    >
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home />
                            )}
                        />
                        {routes.map((route/* , i */) => (
                            <RouteWithSubRoutes key={uuid()} {...route} />
                        ))}
                    </Layout>
                </AppProvider>
            </Router>
        );
    }
}

export default App;
