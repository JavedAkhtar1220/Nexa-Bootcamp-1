import { actionType } from "../constants"

export const checkAuth = (isLogin) => {
    return {
        type: actionType.CHECK_AUTH,
        status: isLogin
    }
}

export const userData = (user) => {
    return {
        type: actionType.USER_DATA,
        userData: user
    }
}

export const clearUserData = () => {
    return {
        type: actionType.CLEAR_USER_DATA,
    }
}

export const themeMode = (theme) => {
    return {
        type: actionType.THEME,
        mode: theme
    }
}