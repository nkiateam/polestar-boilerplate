import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Layout } from 'antd';

import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';

import Header from './components/Header';
import Footer from './components/Footer';
import BookmarkBar from './components/BookmarkBar';
import Breadcrumb from './components/Breadcrumb';
import routes from './routes';
import './styles/App.less';

const { Content } = Layout;

class App extends React.Component {
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
     * 컨텐츠 영역을 렌더링하는 함수
     */
    renderContents = () => (
        <Content className="polestar-app-contents">
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
                onClick={() => {}}
                type="default"
            />
            <Button
                className="polestar-app-chatbot-button"
                shape="circle"
                icon="message"
                size="large"
                htmlType="button"
                onClick={() => {}}
                type="default"
            />
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
