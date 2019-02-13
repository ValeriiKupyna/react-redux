import { createStore } from 'redux'
import { ActionTypes } from './actions';

const dec = (state) => {
    return state - 1;
}

const inc = (state) => {
    return state + 1;
}

const random = (state, payload) => {
    return state + payload;
}

const initialState = 0;

const countActionHendler = (state, action) => {
    switch(action.type) {
        case ActionTypes.APP_DEC: return dec()
        case ActionTypes.APP_INC: return inc()
        case ActionTypes.APP_RANDOM: return random()
        default: return state
    }
}

export const countStore = createStore(countActionHendler, initialState);
    