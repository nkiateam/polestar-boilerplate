import React from 'react';
// import PropTypes from 'prop-types';
import { Button, MegaMenu } from 'polestar-ui-kit';

import withAppConsumer from '../contexts/withAppConsumer';
import menuItems from './menuItems';

class Header extends React.Component {
    // static propTypes = {
    //     onMenuClick: PropTypes.func,
    // };

    // constructor(props) {
    //     super(props);
    // }

    onMenuClick = (e, item, itemPaths) => {
        this.props.appValue.setBreadcrumbRoutes(itemPaths);
    }

    render() {
        console.log('Header Render');
        // const { items, ...others } = this.props;
        return (
            <div className="ps-layout-navbar">
                <div className="ps-layout-navbar-logo">
                    <a href="/#">
                        {/* <img src="../../../public/polestar_logo.png" alt="polestar logo" /> */}
                    </a>
                </div>
                <div className="ps-layout-navbar-nav">
                    <MegaMenu
                        // mode="full"
                        items={menuItems}
                        onClick={this.onMenuClick}
                    />
                </div>
                <div className="ps-layout-navbar-item">
                    <Button icon="search" />
                    <Button icon="bell" />
                    <Button icon="user" />
                    <Button icon="question" />
                    <Button icon="cog" />
                    <Button icon="cog" />
                </div>
            </div>
        );
    }
}

export default withAppConsumer(Header);
