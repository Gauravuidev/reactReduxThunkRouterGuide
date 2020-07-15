import {combineReducers} from 'redux';
import appReducer from './app';
import dataReducer from './data';

const rootReducer = combineReducers({
    counterState:appReducer,
    dataState: dataReducer
});

export default rootReducer;