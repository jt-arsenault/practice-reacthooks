// Reducer that reads and updates state properties related to forms

import { __RouterContext } from 'react-router';
import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
    user_textChange: '',
    user_textSubmit: ''
}

export const FormReducer = (state, action) => {
    switch(action.type) {

        // track changes to input element
        case ACTION_TYPES.USER_INPUT_CHANGE:
            return {
                ...state,
                user_textChange: action.payload
            }

        // adds submitted form to the global state
        case ACTION_TYPES.USER_INPUT_SUBMIT:
            return {
                ...state,
                user_textSubmit: action.payload
            }

        // otherwise, error out
        default:
            throw new Error();
    }
}