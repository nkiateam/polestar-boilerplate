import React from 'react';
import { Layout } from 'antd';

class Footer extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Copyright 문구를 렌더링하는 함수
     */
    renderCopyright = () => 'POLESTAR © NKIA, All Rights Reserved.';

    render() {
        const { ...props } = this.props;
        return (
            <Layout.Footer style={{ textAlign: 'center', height: '4vh' }} {...props}>
                {this.renderCopyright()}
            </Layout.Footer>
        );
    }
}

export default Footer;
