import React, { Component } from 'react';

const Context = React.createContext();

const { Provider, Consumer: AppConsumer } = Context;

class AppProvider extends Component {
    state = {
        breadcrumbRoutes: [{ label: 'Home', path: '/home' }],
    }

    actions = {
        setBreadcrumbRoutes: (breadcrumbRoutes) => {
            this.setState({
                breadcrumbRoutes,
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
