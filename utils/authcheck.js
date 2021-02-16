// Updates the authentication state of the user and retrieves the user's profile data and saves it to the global state. 

import React, {useEffect, useContext} from 'react';
import history from './history';
import Context from './context';
import * as ACTIONS from '../store/actions/actions';


// Makes use of the React useEffect() hook. This component is rendered every time a user logs in and out.
const AuthCheck = () => {

    // First, set up a useContext() hook
    const context = useContext(Context);

    useEffect(() => {
        if(context.authObj.isAuthenticated()) {
            context.handleUserLogin();
            context.handleUserAddProfile(context.authObj.userProfile); // authObj is defined in the JSX portion of context_state_config.js. It is in turn passed from the Auth class.
            history.replace('/');
        }
        else {
            context.handleUserLogout();
            context.handleUserRemoveProfile();
            history.replace('/');
        }
    }, [])

    return (
        // empty div, no on-screen component necessary (but consider: a Loading... screen)
        <div>
        </div>
    )
}

export default AuthCheck;