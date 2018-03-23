import React, {Component} from 'react';
import CommentInput from './commentComponent/CommentInput';
import CommentList from './commentComponent/CommentList';

export default class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    _saveComments (comments) {
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    _loadComments () {
        let comments = localStorage.getItem('comments');
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({
                comments
            })
        }
    }
    onSubmitHandle(comment, e) {
        if (!comment) {
            return;
        }
        if (!comment.username) {
            alert('请输入用户名!');
            return;
        }
        if (!comment.content) {
            alert('请输入评论内容!');
            return;
        }
        let newComment = [];
        newComment.push(comment);
        this.setState(prevState => ({
            comments: this.state.comments.concat(newComment)
        }));
    }
    componentWillMount () {
        this._loadComments();
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextState.comments.length !== this.state.comments.length) {
            this._saveComments(nextState.comments);
            return true;
        }
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmitHandle={(e) => this.onSubmitHandle(e)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}