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
