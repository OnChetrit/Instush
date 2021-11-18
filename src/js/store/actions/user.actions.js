import { userService } from "../../services/user.service";


export const loginUser = (credentials) => {
    return async dispatch => {
        try {
            const user = await userService.login(credentials)
            dispatch({ type: 'SET_USER', user })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}

export const toggleFollow = (user, profile, isFollowing) => {
    return async dispatch => {
        try {
            const userToSave = await userService.toggleFollow(user, profile, isFollowing)
            dispatch({ type: 'SET_USER', user: userToSave })
        }
        catch (err) {
            console.log(`err`, err)
        }
    }
}

export const getUserByUsername = (username) => {
    return userService.getUserByUsername(username);
}
