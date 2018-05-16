import React, { Component } from 'react';

import LeftContent1 from '../leftsides/LeftContent1';

const Context = React.createContext();
const { Provider, Consumer: AppConsumer } = Context;

class AppProvider extends Component {
    state = {
        breadcrumbRoutes: [{ label: 'Home', path: '/home' }],
        leftside: { collapse: false, hidden: false, content: LeftContent1 },
    }

    actions = {
        setBreadcrumbRoutes: (breadcrumbRoutes) => {
            this.setState({
                breadcrumbRoutes,
            });
        },
        setLeftside: (leftside) => {
            this.setState({
                leftside,
            });
        },
    }

    render() {
        // const state = {
        //     breadcrumbRoutes: this.state.breadcrumbRoutes,
        // };
        const appValue = { ...this.state, ...this.actions };
        return (
            <Provider value={appValue}>
                {this.props.children}
            </Provider>
        );
    }
}

export {
    AppProvider,
    AppConsumer,
};
