import { postService } from "../../services/post.service";
import { uploadService } from "../../services/upload.service";


export const loadPosts = (user, username) => {
    return async dispatch => {
        try {
            const posts = await postService.query(user, username)
            dispatch({ type: 'SET_POSTS', posts })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}

export const addLike = (post, user) => {
    return async dispatch => {
        try {
            const returnedPost = await postService.addLike(post, user)
            dispatch({ type: 'UPDATE_POST', post: returnedPost })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}

export const addComment = (post, user, comment) => {
    return async dispatch => {
        try {
            const returnedPost = await postService.addComment(post, user, comment)
            dispatch({ type: 'UPDATE_POST', post: returnedPost })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}
export const uploadImg = (ev) => {
    return async dispatch => {
        try {
            await uploadService.uploadImg(ev)
            // dispatch({ type: 'UPDATE_POST', post: returnedPost })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}
