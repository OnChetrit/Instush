import { postService } from "../../services/post.service";


export const loadPosts = (user) => {
    return async dispatch => {
        try {
            const posts = await postService.query(user)
            dispatch({ type: 'SET_POSTS', posts })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}
export const addLike = (post,user) => {
    return async dispatch => {
        try {
            const returnedPost= await postService.addLike(post,user)
            dispatch({ type: 'UPDATE_POST', post: returnedPost })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}

export const addComment = (post,user,comment) => {
    return async dispatch => {
        try {
            const returnedPost = await postService.addComment(post,user,comment)
            dispatch({ type: 'UPDATE_POST', post: returnedPost })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}
