import {combineReducers} from 'redux';
import {someReducer} from './someReducer';

export const rootReducer = combineReducers({
    some: someReducer
});

