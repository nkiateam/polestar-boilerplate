import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.uuid = uuid();
    }

    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) => <li key={`${this.uuid}-${i * 1}`}>{post.title}</li>)}
            </ul>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
};
