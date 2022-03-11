import { combineReducers } from 'redux';

import { checkAuth, userData, themeMode } from './allReducers';

export const rootReducer = combineReducers({
    isLogin: checkAuth,
    userData: userData,
    theme: themeMode
})