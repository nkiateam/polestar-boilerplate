import React from 'react';
// import PropTypes from 'prop-types';

import { AppConsumer } from './AppContext';

const withAppConsumer = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            console.log('withAppConsumer Render');
            return (
                <AppConsumer>
                    {appValue => <WrappedComponent appValue={appValue} {...this.props} />}
                </AppConsumer>
            );
        }
    };
};

export default withAppConsumer;
