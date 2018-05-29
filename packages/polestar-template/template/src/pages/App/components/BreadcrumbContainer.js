import React, { Component } from 'react';
import { Breadcrumb } from 'polestar-ui-kit';

import withAppConsumer from '../contexts/withAppConsumer';
// import { AppConsumer } from '../contexts/AppContext';

class BreadcrumbContainer extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         breadcrumbRoutes: [{ label: 'Home', path: '/home' }],
    //     };

    //     this.breadcrumbRef = React.createRef();
    // }

    // setItems = (itemPaths) => {
    //     // this.breadcrumbRef.current.setItems(itemPaths);
    //     this.setState({ breadcrumbRoutes: itemPaths });
    // }

    render() {
        // console.log('BreadcrumbContainer Render');
        return (
            <div className="ps-layout-breadcrumb-container">
                {/* <AppConsumer>
                    {
                        (appValue) => (
                            <Breadcrumb
                                // ref={this.breadcrumbRef}
                                // items={this.state.breadcrumbRoutes}
                                items={appValue.breadcrumbRoutes}
                            />
                        )
                    }
                </AppConsumer> */}
                <Breadcrumb
                    items={this.props.appValue.breadcrumbRoutes}
                />
            </div>
        );
    }
}

export default withAppConsumer(BreadcrumbContainer);
