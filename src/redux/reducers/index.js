import { combineReducers } from 'redux';

import { checkAuth, userData } from './allReducers';

export const rootReducer = combineReducers({
    isLogin: checkAuth,
    userData: userData
})