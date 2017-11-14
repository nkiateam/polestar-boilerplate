import React from 'react';
import { Layout, Menu, Button, Row, Col } from 'antd';

class Header extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 헤더 영역의 제품 로고, 제품명을 렌더링하는 함수 (POLESTAR)
     */
    renderLogo = () => (
        <Col lg={3} style={{ textAlign: 'left' }}>
            <div className="logo" >POLESTAR</div>
        </Col>
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
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="0">리소스관리</Menu.Item>
                <Menu.Item key="1">대시보드</Menu.Item>
                <Menu.Item key="2">토폴로지맵</Menu.Item>
                <Menu.Item key="3">성능통계</Menu.Item>
                <Menu.Item key="4">알람콘솔</Menu.Item>
                <Menu.Item key="5">이벤트뷰어</Menu.Item>
                <Menu.Item key="6">시스템관리</Menu.Item>
            </Menu>
        </Col>
    );

    /**
     * 헤더 영역의 우측 메뉴버튼들을 렌더링하는 함수 (검색, 알람, 사용자 ...)
     */
    renderMenuButtons = () => (
        <Col xs={16} sm={16} md={4} lg={3} style={{ textAlign: 'right' }}>
            <Button shape="circle" icon="menu-fold" className="menu-icon" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="search" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="bell" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="user" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="question" style={{ marginRight: '6px' }} />
            <Button shape="circle" icon="setting" style={{ marginRight: '6px' }} />
        </Col>
    );

    render() {
        const { ...props } = this.props;
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

export default Header;
