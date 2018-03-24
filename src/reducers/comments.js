// action.types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENTS = 'ADD_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

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
        case ADD_COMMENTS:
            return {
                comments: [...state.comments, action.comments]
            };
        // 删除评论
        case DELETE_COMMENTS:
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
