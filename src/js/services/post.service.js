import { storageService } from './async-storage.service'

const STORAGE_KEY = 'post'

export const postService = {
    query
}

async function query(user) {
    // return httpService.get(`user`)
    const posts = await storageService.query(STORAGE_KEY)
    return posts.filter(post => {
        return user.following.some(follower => follower.username === post.createdBy.username)
    })
}
