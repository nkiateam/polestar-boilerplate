import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter.value,
    };
};

export default connect(mapStateToProps)(Counter);
