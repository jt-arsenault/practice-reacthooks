// Business logic for reading and updating the current state.
// All held in one file to make it easier to debug.
// Note that the <Routes /> component is wrapped in <Context.Provider />. 
// This allows the ability to read and update the state to be passed down through the value prop to all the components, creating a global state. 

import React, {useReducer} from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions'

import * as Reducer1 from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/form_reducer';

import Auth from './utils/auth';

// Initialize the Auth object defined in ./utils/auth.js
const auth = new Auth();

const ContextState = () => {

    //==========================================================================================================//

    /*
        Plain Reducer
    */

    //==========================================================================================================//


    const [stateReducer1, dispatchReducer1] = useReducer(Reducer1.Reducer1, Reducer1.initialState);

    const handleDispatchTrue = () => {
        // dispatchReducer1 (type: "SUCCESS")
        // dispatchReducer1(ACTIONS.SUCCESS)

        dispatchReducer1(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        // dispatchReducer1(type: "FAILURE")
        // dispatchReducer1(ACTIONS.FAILURE)
        dispatchReducer1(ACTIONS.failure());
    }

    //==========================================================================================================//

    /*
        Auth Reducer
    */

    //==========================================================================================================//


    // Uses array destructuring to access the state and the dispatch
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer, AuthReducer.initialState);

    const handleLogin = () => {
        dispatchAuthReducer(ACTIONS.login_success());
    }

    const handleLogout = () => {
        dispatchAuthReducer(ACTIONS.login_failure());
    }

    const handleAddProfile = (profile) => {
        dispatchAuthReducer(ACTIONS.add_profile(profile));
    }

    const handleRemoveProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_profile());
    }

        //==========================================================================================================//


    /*
        Form Reducer

        Notice how we rely on actions defined in `actions.js`. These functions return objects specifying the type of action 
        and, if applicable, a payload

    */

        //==========================================================================================================//


    // Get the 'state' and 'dispatch' from the useReducer() method
    const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.FormReducer, FormReducer.initialState);

    const handleFormChange = (event) => {
        dispatchFormReducer(ACTIONS.user_input_change(event.target.value)); // Nothing special; JavaScript standard for accessing event values
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault(); // prevent the page from reloading
        event.persist(); // required for the form to function correctly -- we do this because we're using Context, the data of which comes from a child component
        dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value)); // JavaScript standard to access submitted text
    }

    //==========================================================================================================//


    // Handle Authentication from callback


    //==========================================================================================================//


    const handleAuthentication = (props) => {
        if(props.location.hash) {
            auth.handleAuth();  // defined in ./utils/auth.js
        }
    }

    return(
        <div>
            {/* JSX COmponent where we pass all the functions and state values we defined */}
            <Context.Provider
                value={{
                    //Reducer1
                    stateProp1: stateReducer1.stateprop1,
                    stateProp2: stateReducer1.stateprop2,
                    dispatchContextTrue: () => handleDispatchTrue(),
                    dispatchContextFalse: () => handleDispatchFalse(),

                    //Form reducer
                    useContextChangeState: stateFormReducer.user_textChange,
                    useContextSubmitState: stateFormReducer.user_textSubmit,
                    useContextSubmit: (event) => handleFormSubmit(event),
                    useContextChange: (event) => handleFormChange(event),

                    //Auth reducer
                    authState: stateAuthReducer.is_authenticated,
                    profileState: stateAuthReducer.profile,
                    handleUserLogin: () => handleLogin(),
                    handleUserLogout: () => handleLogout(),
                    handleUserAddProfile: (profile) => handleAddProfile(profile),
                    handleUserRemoveProfile: () => handleRemoveProfile(),

                    //Handle Auth
                    handleAuth: (props) => handleAuthentication(props),
                    authObj: auth
                }}>
            <Routes /> 
            {/* All routes are wrapped in the Context.Provider tag. This is how we achieve global state */}
        </Context.Provider>
        </div>
    )

}

export default ContextState;