import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class HeaderArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        }

        this.onCollapse = this.onCollapse.bind(this);
    }

    onCollapse() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Row type="flex" justify="space-between">
                <Col lg={3} style={{ textAlign: 'left' }}>
                    <div className="logo" >POLESTAR 7</div>
                </Col>
                <Col xs={2} sm={2} md={17} lg={18} className="menu-bars" style={{ textAlign: 'center', padding: '1px 0px 1px 0px' }}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">

                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={16} sm={16} md={4} lg={3} style={{ textAlign: 'right' }}>
                    <Button shape="circle" icon="menu-fold" className="menu-icon" style={{ marginRight: '6px' }} />
                    <Button shape="circle" icon="search" style={{ marginRight: '6px' }} />
                    <Button shape="circle" icon="bell" style={{ marginRight: '6px' }} />
                    <Button shape="circle" icon="user" style={{ marginRight: '6px' }} />
                    <Button shape="circle" icon="question" style={{ marginRight: '6px' }} />
                    <Button shape="circle" icon="setting" style={{ marginRight: '6px' }} />
                </Col>
            </Row>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleCollapsed: () => dispatch(toggleCollapsed()),
    }
}

export default connect(undefined, mapDispatchToProps)(HeaderArea);