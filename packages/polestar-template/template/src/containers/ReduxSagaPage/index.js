import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReddit, invalidateReddit } from './actions';
import Picker from './components/Picker';
import Posts from './components/Posts';

class ReduxSagaPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  handleChange(nextReddit) {
    this.props.onSelectReddit(nextReddit);
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { onInvalidateReddit, selectedReddit } = this.props;
    onInvalidateReddit(selectedReddit);
  }

  render() {
    const { selectedReddit, items, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
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
    )
  }
}

let mapStateToProps = (state) => {
  const { selectedReddit, postsByReddit } = state;
  const { 
    isFetching, lastUpdated, items 
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    items,
    isFetching,
    lastUpdated
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      onSelectReddit: (reddit) => dispatch(selectReddit(reddit)),
      onInvalidateReddit: (reddit) => dispatch(invalidateReddit(reddit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaPage);