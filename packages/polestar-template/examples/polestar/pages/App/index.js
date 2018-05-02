import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Button, Layout } from 'antd';

import RouteWithSubRoutes from 'RouteWithSubRoutes';

import Header from './components/Header';
import Footer from './components/Footer';
import BookmarkBar from './components/BookmarkBar';
import Breadcrumb from './components/Breadcrumb';
import Sidebar from './components/Sidebar';

import routes from './routes';
import './styles/App.less';

const { Content } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
            chat: false,
        };
    }

    toggleSidebar = () => {
        this.setState({
            sidebar: !this.state.sidebar,
        });
    };

    toggleChat = () => {
        this.setState({
            chat: !this.state.chat,
        });
    };

    /**
     * 레이아웃의 헤더 영역을 렌더링하는 함수 (POLESTAR 로고, 대메뉴, 각종 버튼들...)
     */
    renderHeader = () => <Header className="polestar-app-header" />;

    /**
     * 북마크바를 렌더링하는 함수 (최근 방문, 자주 방문, 북마크 1, 2, 3 ...)
     */
    renderBookmarkBar = () => <BookmarkBar className="polestar-app-bookmark" />;

    /**
     * 브레드크럼을 렌더링하는 함수 (Home > List > App ...)
     */
    renderBreadcrumb = () => <Breadcrumb className="polestar-app-breadcrumb" />;

    /**
     * 사이드바를 렌더링하는 함수
     */
    renderSidebar = () => (
        <Sidebar
            show={this.state.sidebar}
            size={350}
        >
            <div>메뉴 1</div>
            <div>메뉴 2</div>
            <div>메뉴 3</div>
            <div>메뉴 4</div>
            <div>메뉴 5</div>
        </Sidebar>
    );

    /**
     * 챗봇 윈도우를 렌더링하는 함수
     */
    renderChat = () => (
        <Sidebar
            position="right"
            show={this.state.chat}
            size={350}
        >
            <div>챗봇 1</div>
            <div>챗봇 2</div>
            <div>챗봇 3</div>
            <div>챗봇 4</div>
            <div>챗봇 5</div>
        </Sidebar>
    );

    /**
     * 컨텐츠 영역을 렌더링하는 함수
     */
    renderContents = () => (
        <Content className="polestar-app-contents" style={{height: '100%'}}>
            {this.renderBreadcrumb()}
            {routes.map((route, i) => {
                const key = i + 1;
                return <RouteWithSubRoutes key={key} {...route} />;
            })};
        </Content>
    );

    /**
     * 레이아웃의 푸터 영역을 렌더링하는 함수 (POLESTAR © NKIA, All Rights Reserved.)
     */
    renderFooter = () => <Footer className="polestar-app-footer" />;

    /**
     * 헤더, 북마크, 브레드크럼, 컨텐츠, 푸터를 전체 레이아웃으로 합쳐서 렌더링 하는 함수
     */
    renderLayout = () => (
        <Layout className="polestar-app-container">
            <Layout style={{ height: '100vh' }}>
                {this.renderHeader()}
                {this.renderBookmarkBar()}
                {this.renderContents()}
                {this.renderFooter()}
            </Layout>
            <Button
                className="polestar-app-sidebar-button"
                shape="circle"
                icon="bars"
                size="large"
                htmlType="button"
                onClick={this.toggleSidebar}
                type="default"
            />
            <Button
                className="polestar-app-chatbot-button"
                shape="circle"
                icon="message"
                size="large"
                htmlType="button"
                onClick={this.toggleChat}
                type="default"
            />
            {this.renderSidebar()}
            {this.renderChat()}
        </Layout>
    );

    render() {
        return (
            <Router>
                {this.renderLayout()}
            </Router>
        );
    }
}

export default App;
