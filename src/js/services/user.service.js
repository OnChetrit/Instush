import { storageService } from './async-storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'user'
export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    query,
    getById,
    remove,
    update,
    save,
    getUserByUsername,
    toggleFollow
}

window.userService = userService

function query() {
    // return httpService.get(`user`)
    return storageService.query(STORAGE_KEY)
}

function _createMiniUser(id, username, imgUrl) {
    return {
        _id: id,
        username,
        imgUrl
    }
}

async function toggleFollow(user, profile, isFollowing) {
    const profileIdx = user.following.findIndex(following => following.username === profile.username)
    const userIdx = profile.followers.findIndex(following => following.username === user.username)
    if (isFollowing) {
        user.following.splice(profileIdx, 1)
        profile.followers.splice(userIdx, 1)
    } else {
        const miniUserToFollow = _createMiniUser(profile._id, profile.username, profile.imgUrl)
        const miniUserIsFollow = _createMiniUser(user._id, user.username, user.imgUrl)
        user.following.push(miniUserToFollow)
        profile.followers.push(miniUserIsFollow)
    }
    return await storageService.put(STORAGE_KEY, user)

}
async function getUserByUsername(username) {
    return await storageService.getByName(STORAGE_KEY,username);
}

async function getById(userId) {
    const user = await storageService.get(STORAGE_KEY, userId)
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;
    return user;
}

function remove(userId) {
    return storageService.remove(STORAGE_KEY, userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put(STORAGE_KEY, user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY)
    var user = users.find(user => user.username === userCred.username)
    if (user) return _saveLocalUser(user)
    // const user = await httpService.post('auth/login', userCred)
    // socketService.emit('set-user-socket', user._id);
}

async function signup(userCred) {
    const user = await storageService.post(STORAGE_KEY, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    // socketService.emit('set-user-socket', user._id);
    return user;
}


async function logout() {
    // socketService.emit('unset-user-socket');
    // await httpService.post('auth/logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function save(user) {
    if (user._id) {
        return storageService.put(STORAGE_KEY, user)
    } else {
        return storageService.post(STORAGE_KEY, user)
    }
}

export function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
// })();



// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     var user = getLoggedinUser()
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();

