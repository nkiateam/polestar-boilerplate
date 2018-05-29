import React from 'react';
// import PropTypes from 'prop-types';
import { Button, MegaMenu } from 'polestar-ui-kit';

import withAppConsumer from '../contexts/withAppConsumer';
import menuItems from './menuItems';
import LeftContent1 from '../leftsides/LeftContent1';
import LeftContent2 from '../leftsides/LeftContent2';

class Header extends React.Component {
    // static propTypes = {
    //     onMenuClick: PropTypes.func,
    // };

    // constructor(props) {
    //     super(props);
    // }
    componentDidUpdate(/* prevProps, prevState, snapshot */) {
        if (!this.props.appValue.leftside.hidden) {
            this.props.layoutRef.current.showLeft(true, () => {
                if (!this.props.appValue.leftside.collapse) {
                    this.props.layoutRef.current.expandLeft();
                } else {
                    this.props.layoutRef.current.expandLeft(false);
                }
            });
        } else {
            this.props.layoutRef.current.showLeft(false);
        }
    }

    onMenuClick = (e, item, itemPaths) => {
        if (item.path === '/home') {
            this.props.appValue.setLeftside({
                content: LeftContent1,
            });
        } else if (item.path === '/sample') {
            this.props.appValue.setLeftside({
                content: LeftContent2,
            });
        } else if (item.path === '/redux') {
            this.props.appValue.setLeftside({
                collapse: true,
                content: LeftContent1,
            });
        } else if (item.path === '/redux-async') {
            this.props.appValue.setLeftside({
                hidden: true,
            });
        }

        this.props.appValue.setBreadcrumbRoutes(itemPaths);
    }

    render() {
        // console.log('Header Render');
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
