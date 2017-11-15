import React from 'react';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
    static propTypes = {
        position: PropTypes.oneOf([
            'left',
            'right',
        ]),
        show: PropTypes.bool,
        size: PropTypes.number,
    };

    static defaultProps = {
        position: 'left',
        show: false,
        size: 350,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const style = {
            width: this.props.size,
        };

        if (this.props.position === 'left') {
            style.transform = this.props.show ? 'translateX(0)' : `translateX(-${this.props.size}px)`;
        } else if (this.props.position === 'right') {
            style.right = 0;
            style.transform = this.props.show ? 'translateX(0)' : `translateX(${this.props.size}px)`;
        }

        const {
            show,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                className="polestar-app-sidebar"
                style={style}
            >{this.props.children}
            </div>
        );
    }
}

export default Sidebar;
