import React, { Component } from 'react';
import CommentInput from './commentComponent/CommentInput';
import CommentList from './commentComponent/CommentList';

export default class CommentApp extends Component{
    render () {
        return (
            <div className='wrapper'>
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}