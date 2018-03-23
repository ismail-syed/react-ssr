import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component{
    static propTypes = {
        comment : PropTypes.object.isRequired
    }
    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span className='comment-username'>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}