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
        // 保存评论数据到localStorage中
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
        this._saveComments(this.state.comments);
    }
    handleDeleteComment (index, e) {
        // == 删除数据函数
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({
            comments: comments
        });
        // 保存删除评论后的数据到localStorage
        this._saveComments(comments);
    }
    componentWillMount () {
        this._loadComments();
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmitHandle={(e) => this.onSubmitHandle(e)}/>
                <CommentList comments={this.state.comments} onDeleteComment={ (e) => this.handleDeleteComment(e)}/>
            </div>
        )
    }
}