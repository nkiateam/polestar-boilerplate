import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button, Row, Col } from 'antd';

class BookmarkArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Row className="bookmark-row">
                <Col span={24} >
                    <Button icon="book" style={{ border: '0px'}} ghost>
                        최근 방문
                    </Button>
                    <Button icon="book" style={{ border: '0px'}} ghost>
                        자주 방문
                    </Button>
                    <Button icon="book" style={{ border: '0px'}} ghost>
                        북마크 #1
                    </Button>
                    <Button icon="book" style={{ border: '0px'}} ghost>
                        북마크 #2
                    </Button>
                    <Button icon="book" style={{ border: '0px'}} ghost>
                        북마크 #3
                    </Button>
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

export default connect(undefined, mapDispatchToProps)(BookmarkArea);