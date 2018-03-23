import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps = {
        comments: []
    }
    render () {
        return(
            <div>
                {this.props.comments.map((comment, index) => <Comment comment={comment} key={index}/> )}
            </div>
        )
    }
}