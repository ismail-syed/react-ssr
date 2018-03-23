import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component{
    static propTypes = {
        comment : PropTypes.object.isRequired,
        index: PropTypes.number,
        onDeleteComment: PropTypes.func
    }
    constructor () {
        super();
        this.state = {
            timeStampString: ''
        }
    }
    _updateTimeString () {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeStampString : duration > 60 ? `${Math.round(duration/60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
        })
    }
    handleDeleteComponent (e) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index);
        }
    }
    componentWillMount () {
        this._updateTimeString();
    }
    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span className='comment-username'>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeStampString}
                </span>
                <span className='comment-delete' onClick={(e) => this.handleDeleteComponent(e)}>
                    删除
                </span>
            </div>
        )
    }
}