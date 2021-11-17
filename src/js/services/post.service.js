import { storageService } from './async-storage.service'

const STORAGE_KEY = 'post'

export const postService = {
    query,
    addLike,
    addComment
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
async function addComment(post,user,txt) {
    const comment = _createComment(user,txt)
    post.comments.push(comment)
    return await storageService.put(STORAGE_KEY, post)
}

function _createComment(user,txt) {
    return {
        _id: _makeId(),
        createdAt: Date.now(),
        createdBy: {
            _id: user._id,
            username: user.username,
            imgUrl: user.imgUrl,
        },
        txt,
        likedBy: []
    }
}


export function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
