import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb, Button } from 'antd';

import HeaderArea from './components/HeaderArea';
import BookmarkArea from './components/BookmarkArea';
import Home from 'pages/Home';
import RouteWithSubRoutes from 'RouteWithSubRoutes';
import routes from './routes';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.info("Layout#1", this);
    }

    render() {
        console.info("render Layout")
        return (
            <Router>
                <Layout>
                    <Layout style={{ height: "100vh" }}>
                        <Header className="header" >
                            <HeaderArea />
                        </Header>
                        <BookmarkArea />
                        <Content>
                            <Breadcrumb >
                                <Breadcrumb.Item><Icon type="home" /> Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Route exact path="/" render={() => (
                                <Home />
                            )}/>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route}/>
                            ))}
                        </Content>
                        <Footer style={{textAlign: 'center',height: "4vh"   }}>
                            POLESTAR © NKIA, All Rights Reserved.
                        </Footer>
                    </Layout>
                    {/* <img src="/public/footer_bn3.png" className="hand" /> */}
                    <Button className="btn-left-bottom" shape="circle" icon="bars" size="large" />
                    <Button className="btn-right-bottom" shape="circle" icon="message" size="large" />
                </Layout>
            </Router>



        );
    }
}

export default App;