import { storageService } from './async-storage.service'

const STORAGE_KEY = 'post'

export const postService = {
    query,
    addLike
}

async function query(user) {
    // return httpService.get(`user`)
    const posts = await storageService.query(STORAGE_KEY)
    return posts.filter(post => {
        return user.following.some(follower => follower.username === post.createdBy.username)
    })
}
async function addLike(post,user) {
   const userLiked = post.likes.find(likeBy => likeBy.username === user.username)
    if (userLiked) {
        post.likes.splice(post.likes.indexOf(userLiked), 1)
    } else {
        const {_id, username, fullname, imgUrl} = user
        const userToAdd = {
            _id,
            username,
            fullname,
            imgUrl
        }
        post.likes.push(userToAdd)
    }
    return await storageService.put(STORAGE_KEY, post)
}
