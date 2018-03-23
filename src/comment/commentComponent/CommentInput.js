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
        if (this.props.onSubmitHandle) {
           this.props.onSubmitHandle(Object.assign({}, this.state));
        }
        this.setState({
            content: ''
        })
    }
    componentDidMount () {
        this.textarea.focus();
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
                        <textarea value={this.state.content} onChange={(e) => this.handleContent(e)}
                        ref={ t => this.textarea = t }></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={(e) => this.handleSubmit(e)}>发布</button>
                </div>
            </div>
        )
    }
}