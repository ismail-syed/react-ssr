import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ''
        }
    }
    handleUsernameBlur (e) {
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value);
        }
    }
    handleUserNameChange (e) {
        this.setState({
            username: e.target.value
        });
    }
    handleContentChange (e) {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit (e) {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
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
                        <input value={this.state.username} onChange={(e) => this.handleUserNameChange(e)}
                               onBlur={(e) => this.handleUsernameBlur(e)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容:</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={(e) => this.handleContentChange(e)}
                                  ref={t => this.textarea = t}></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={(e) => this.handleSubmit(e)}>发布</button>
                </div>
            </div>
        )
    }
}