import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps = {
        comments: [],
    }
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    handleDeleteComment (index,e) {
       if (this.props.onDeleteComment) {
           this.props.onDeleteComment(index);
       }
    }
    render () {
        return(
            <div>
                {this.props.comments.map((comment, index) => <Comment comment={comment} key={index}
                                                                      index={index}
                                                                      onDeleteComment={ (e) => this.handleDeleteComment(e)}/> )}
            </div>
        )
    }
}