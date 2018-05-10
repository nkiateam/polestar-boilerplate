import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diff: '1',
        };

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    onChangeDiff(e) {
        if (Number.isNaN(e.target.value)) { return; }

        this.setState({ diff: e.target.value });

        if (e.target.value === '') {
            this.setState({ diff: '0' });
        }

        this.props.onUpdateDiff(parseInt(e.target.value, 10));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.diff} onChange={this.onChangeDiff} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value)),
    };
};

export default connect(undefined, mapDispatchToProps)(Option);
