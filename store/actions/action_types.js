// Holds all the string action types in variables. This allows for easy modification of action types, since 
// we will only have to change them in this file.

// boilerplate actions
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// For updating the authentication state of the user
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Used to save profile data from Auth0 to the global state
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

// Used to track changes and submit any user-submitted text from the form
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT";