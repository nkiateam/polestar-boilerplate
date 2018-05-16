import React, { Component } from 'react';

import withAppConsumer from '../contexts/withAppConsumer';

class LeftSide extends Component {

    render() {
        console.log('LeftSide Render');
        const Content = this.props.appValue.leftside.content;// ? this.props.appValue.leftside.content : null;
        return (
            <Content />
        );
    }
}

export default withAppConsumer(LeftSide);
