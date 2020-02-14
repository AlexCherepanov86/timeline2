import { combineReducers } from 'redux';

import room from './roomReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    room,
    user
});

export default rootReducer;