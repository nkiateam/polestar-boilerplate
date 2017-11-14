import React from 'react';
import { Breadcrumb as AntBreadcrumb, Icon } from 'antd';

class Breadcrumb extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { ...props } = this.props;
        return (
            <AntBreadcrumb {...props}>
                <AntBreadcrumb.Item><Icon type="home" /> Home</AntBreadcrumb.Item>
                <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
                <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
            </AntBreadcrumb>
        );
    }
}

export default Breadcrumb;
