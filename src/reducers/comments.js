// action.types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// reducer
export default function (state, action) {
    if (!state) {
        state = {comments: []}
    }
    switch (action.type) {
        // 初始化评论
        case INIT_COMMENTS:
            return {comments: action.comments};
        // 新增评论
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.comment]
            };
        // 删除评论
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...action.comments.slice(action.commentIndex+1)
                ]
            }
        default:
            return state;
    }
}

//action creators
export const initComments = (comments) => {
    return {type:INIT_COMMENTS,comments};
}

export const addComment = (comment) => {
    return {type:ADD_COMMENT, comment};
}

export const deleteComment = (commentIndex) => {
    return {type:DELETE_COMMENT,commentIndex};
}