// User dashboard that displays profile data

import React, {useContext} from 'react';
import Context from '../utils/context';

const Profile = () => {
    const context = useContext(Context);

    const RenderProfile = (props) => {
        return (
            <div>
                <h1>{props.profile.profile.nickname}</h1>
                <br />
                <img src={props.profile.profile.picture} alt="" />
                <br />
                <h4> {props.profile.profile.email} </h4>
                <br />
                <h5> {props.profile.profile.name} </h5>
                <br />
                <h6>Email Verified: </h6>
                {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p>}
                <br />
            </div>
        )
    }


    return(
        <div>
            {/* User profile is native to auth0. We don't have to manually set it up */}
            <RenderProfile profile={context.authObj.userProfile} /> 
        </div>
    )
}

export default (Profile);