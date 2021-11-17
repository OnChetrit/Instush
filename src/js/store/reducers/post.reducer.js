const initialState = {
    post: null,
    posts: [],
    stories: []
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
        case 'UPDATE_POST':
            return {
                ...state,
                posts: state.posts && state.posts.map(post => post._id === action.post._id ? action.post : post),
            }
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
