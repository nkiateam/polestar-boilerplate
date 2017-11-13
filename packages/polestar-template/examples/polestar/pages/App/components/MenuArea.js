import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Menu, Icon, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class MenuArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col span={24} >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/home">
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/group">
                                <span>그룹</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/counter">
                                <span>토폴로지맵</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/asset">
                                <span>알람콘솔</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/examples">
                                <span>이벤트 뷰어</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/grid">
                                <span>Grid</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                    </Menu>
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

export default connect(undefined, mapDispatchToProps)(MenuArea);