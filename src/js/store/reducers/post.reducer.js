import { userService } from '../../services/user.service.js'


const initialState = {
    post: null,
    posts: [],
}
export function postReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_POST':
            newState = { ...state, post: action.post }
            break;
        case 'SET_POSTS':
            newState = { ...state, posts: action.posts }
            break;
        case 'REMOVE_POST':
            const posts = state.posts.filter(post => post._id !== action.postId)
            newState = { ...state, posts }
            break
        default:
    }
    // For debug:
    window.userState = newState;
    // console.log('State:', newState);
    return newState;

}
