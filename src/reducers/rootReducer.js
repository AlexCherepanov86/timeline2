import { combineReducers } from 'redux';

import room from './roomReducer';
import user from './userReducer';
import modalBlur from './modalBlurReducer';

const rootReducer = combineReducers({
    room,
    user,
    modalBlur
});

export default rootReducer;