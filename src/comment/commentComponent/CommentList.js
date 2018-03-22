import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps = {
        comments: []
    }
    render () {
        return(
            <div>
               <Comment/>
            </div>
        )
    }
}