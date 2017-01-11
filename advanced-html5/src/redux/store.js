import {combineReducers, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import usersReducer from './usersReducer';

const middleware = applyMiddleware(logger());

export default createStore(usersReducer, middleware);
