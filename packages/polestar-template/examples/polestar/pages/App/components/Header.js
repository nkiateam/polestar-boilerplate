import React from 'react';
import { withRouter } from 'react-router';

import { Layout, Menu, Button, Row, Col, Dropdown } from 'antd';

class Header extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    onMenuClick = ({ item, key, keyPath }) => {
        if (key === '0') {
            this.props.history.push('/dashboard');
        } else if (key === '1') {
            this.props.history.push('/crud');
        } else if (key === '2') {
            this.props.history.push('/wizard');
        } else if (key === '3') {
            this.props.history.push('/collectionSearch');
        } else if (key === '4') {
            this.props.history.push('/execSearch');
        } else if (key === '5') {
            this.props.history.push('/fileManager');
        } else if (key === '6') {
            this.props.history.push('/settings');
        }
    };

    /**
     * 헤더 영역의 제품 로고, 제품명을 렌더링하는 함수 (POLESTAR)
     */
    renderLogo = () => (
        <Col lg={3} style={{ textAlign: 'left' }}>
            <div className="polestar-app-logo">POLESTAR</div>
        </Col>
    );

    /**
     * 메뉴 목록을 렌더링 하는 함수
     * @param direction {'horizontal' || 'vertical'}
     */
    renderMenu = (direction = 'vertical') => (
        <Menu theme="dark" mode={direction} defaultSelectedKeys={['1']} onClick={this.onMenuClick}>
            <Menu.Item key="0">대시보드</Menu.Item>
            <Menu.Item key="1">CRUD</Menu.Item>
            <Menu.Item key="2">Wizard</Menu.Item>
            <Menu.Item key="3">수집조회</Menu.Item>
            <Menu.Item key="4">실행조회</Menu.Item>
            <Menu.Item key="5">파일매니저</Menu.Item>
            <Menu.Item key="6">설정</Menu.Item>
        </Menu>
    );

    /**
     * 헤더 영역의 대메뉴 목록을 렌더링하는 함수 (리소스관리, 대시보드, 토폴로지맵 ...)
     */
    renderTopMenu = () => (
        <Col
            xs={2}
            sm={2}
            md={17}
            lg={18}
            className="menu-bars"
            style={{ textAlign: 'center', padding: '1px 0px 1px 0px' }}
        >
            {this.renderMenu('horizontal')}
        </Col>
    );

    /**
     * 화면 폭이 좁아지면 상단 대메뉴가 우측 상단 햄버거 메뉴로 숨겨지게 되는데,
     * 햄버거 버튼에 마우스오버했을 때 나오는 드롭다운을 렌더링하는 함수
     */
    renderDropdownMenu = () => (
        <Dropdown overlay={this.renderMenu('vertical')}>
            <Button shape="circle" icon="menu-fold" className="menu-icon" style={{ marginRight: '6px' }} />
        </Dropdown>
    );

    /**
     * 헤더 영역의 우측 메뉴버튼들을 렌더링하는 함수 (검색, 알람, 사용자 ...)
     */
    renderMenuButtons = () => (
        <Col xs={16} sm={16} md={4} lg={3} style={{ textAlign: 'right' }}>
            {this.renderDropdownMenu()}
            <Button shape="circle" icon="search" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="bell" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="user" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="question" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="setting" style={{ marginRight: '6px' }} />
        </Col>
    );

    render() {
        const {
            staticContext,
            ...props
        } = this.props;
        return (
            <Layout.Header className="header" {...props}>
                <Row type="flex" justify="space-between">
                    {this.renderLogo()}
                    {this.renderTopMenu()}
                    {this.renderMenuButtons()}
                </Row>
            </Layout.Header>
        );
    }
}

export default withRouter(Header);
