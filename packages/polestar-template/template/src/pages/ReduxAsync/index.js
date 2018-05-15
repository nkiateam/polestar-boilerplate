import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectReddit, /* invalidateReddit, */ fetchPosts } from './actions';
// import * as Actions from './actions';
import Picker from './components/Picker';
import Posts from './components/Posts';

class ReduxAsyncPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // const { selectedReddit, Actions } = this.props;
        // Actions.fetchPosts(selectedReddit);

        const { selectedReddit/* , onFetchPosts */ } = this.props;
        // onFetchPosts(selectedReddit);
        this.fetchPosts(selectedReddit);
    }

    componentWillReceiveProps(nextProps) {
        const { selectedReddit/* , onFetchPosts */ } = this.props;

        // 현재 selectedReddit 와 새로 받을 selectedReddit 가 다를 경우에 요청을 시도한다.
        if (selectedReddit !== nextProps.selectedReddit) {
            // onFetchPosts(nextProps.selectedReddit);
            this.fetchPosts(nextProps.selectedReddit);
        }
    }

    fetchPosts = async (selectedReddit) => {
        const { onFetchPosts } = this.props;

        try {
            await onFetchPosts(selectedReddit);
        } catch (e) {
            // console.log(e);
        }
    }

    handleChange = (nextReddit) => {
        this.props.onSelectReddit(nextReddit);
    }

    handleRefreshClick = (e) => {
        e.preventDefault();
        const { onFetchPosts, selectedReddit } = this.props;
        onFetchPosts(selectedReddit);
    }

    render() {
        const {
            selectedReddit,
            items,
            isFetching,
            lastUpdated,
        } = this.props;
        return (
            <div>
                <Picker
                    value={selectedReddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                    }
                    {!isFetching &&
                    <button
                        // href="#"
                        onClick={this.handleRefreshClick}
                    >
                        Refresh
                    </button>
                    }
                </p>
                {isFetching && items.length === 0 &&
                <h2>Loading...</h2>
                }
                {!isFetching && items.length === 0 &&
                <h2>Empty.</h2>
                }
                {items.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={items} />
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedReddit, postsByReddit } = state;
    const {
        isFetching, lastUpdated, items,
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: [],
    };

    return {
        selectedReddit,
        items,
        isFetching,
        lastUpdated,
    };
};

// let mapDispatchToProps = (dispatch) => ({
//   Actions: bindActionCreators(Actions, dispatch)
// })

const mapDispatchToProps = (dispatch) => ({
    onSelectReddit: (reddit) => dispatch(selectReddit(reddit)),
    onFetchPosts: (reddit) => dispatch(fetchPosts(reddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAsyncPage);
