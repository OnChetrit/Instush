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
