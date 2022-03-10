import { actionType } from "../constants";


export const checkAuth = (state = false, { type, status }) => {
    switch (type) {
        case actionType.CHECK_AUTH:
            return status;
        default:
            return state;
    }
}

export const userData = (state = {}, { type, userData }) => {
    switch (type) {
        case actionType.USER_DATA:
            return { ...userData };
        case actionType.CLEAR_USER_DATA:
            return {};
        default:
            return state;
    }
}