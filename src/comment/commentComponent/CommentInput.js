import React, {Component} from 'react';

export default class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUserName(e) {
        let username = e.target.value;
        this.setState({
            username
        })
    }

    handleContent(e) {
        let content = e.target.value;
        this.setState({
            content
        })
    }

    handleSubmit(e) {
        console.log('click submit');
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名:</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={(e) => this.handleUserName(e)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容:</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={(e) => this.handleContent(e)}></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={(e) => this.handleSubmit(e)}>发布</button>
                </div>
            </div>
        )
    }
}