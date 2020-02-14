import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import rootReducer from '../reducers/rootReducer';
import user from '../reducers/userReducer';
import room from '../reducers/roomReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
        room,
        user
});

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
);
