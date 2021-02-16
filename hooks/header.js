// Contains links to the components and a login/logout button, based on the user's authentication state

import React, {usecontext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../utils/context';

const Header = () => {

    // establish our context
    const context = useContext(Context);

    // Return a header with links to all our components, plus a ternary expression
    // This expression displays either a login or logout depending on context.authState
    return(
        <div>
            <Link to='/' style={{padding: '5px'}}>
                Home
            </Link>
            <Link to='/profile' style={{padding: '5px'}}>
                Profile
            </Link>
            <Link to='/hooksform' style={{padding: '5px'}}>
                Hooks Form
            </Link>
            <Link to='/hookscontainer' style={{padding: '5px'}}>
                Hooks Container
            </Link>
            <Link to='/privateroute' style={{padding: '5px'}}>
                Private Route
            </Link>
            {!context.authState
                ? <button onClick = {() => context.authObj.login()}>Login</button>
                : <button onClick = {() => context.authObj.logout()}>Logout</button>
            }
        </div>
    )
}

export default Header;