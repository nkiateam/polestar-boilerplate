import React from 'react';
import { Button, Row, Col } from 'antd';

class BookmarkBar extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { ...props } = this.props;
        return (
            <Row {...props}>
                <Col span={24} >
                    <Button icon="book" style={{ border: '0px' }} ghost>
                        최근 방문
                    </Button>
                    <Button icon="book" style={{ border: '0px' }} ghost>
                        자주 방문
                    </Button>
                    <Button icon="book" style={{ border: '0px' }} ghost>
                        북마크 #1
                    </Button>
                    <Button icon="book" style={{ border: '0px' }} ghost>
                        북마크 #2
                    </Button>
                    <Button icon="book" style={{ border: '0px' }} ghost>
                        북마크 #3
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default BookmarkBar;
