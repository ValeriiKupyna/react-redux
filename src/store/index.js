import { combineReducers } from 'redux';
import { countStore } from './reducer';

export default combineReducers({
    count: countStore
})