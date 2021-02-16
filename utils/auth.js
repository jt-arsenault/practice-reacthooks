//The only class in this app. Note that this is not a React class component.
// Instead, it's a vanilla JavaScript class. This is done to avoid complexities related to arrow functions.
// All authentication-related functions and variables are located here. 

import auth0 from 'autho-js';
import history from './history';

export default class Auth {

    // Property we will use to initialize our Auth0 app
    auth0 = new auth0.webAuth({
        domain: 'webapp1.auth0.com',
        clientID: '',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    // Empty object that will hold the user profile data we get from Auth0
    userProfile = {};

    // Brings up the Auth0 login widget, which allows the user to log in with the authorize() method
    login = () => {
        this.auth0.authorize();
    }

    // Saves the ID and Access Tokens we receive from Auth0 to the browser's local storage. 
    // Also sets the token expiration time.
    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult) {
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);

                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem('expiresAt', expiresAt);

                this.getProfile();
                setTimeout(() => {history.replace('/authcheck')}, 600);
            } else {
                console.log(err);
            }
        });
    }

    // Retrieves the access token from local storage
    getAccessToken = () => {
        if(localStorage.getItem('access_token')) {
            const accessToken = localStorage.getItem('access_token');
            return accessToken;
        } else {
            return null;
        }
    }

    // Parses the access token to extract user profile data
    getProfile = () => {
        let accessToken = this.getAccessToken();
        if(accessToken) {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if(profile) {
                    this.userProfile = {profile};
                }
            });
        }
    }

    // Logs the user out by removing tokens from local browser storage
    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');
        setTimeout(() => { history.replace('/authcheck') }, 200);
    }

    // Ensures that the user is logged in (compares the 'expires time' to the current time)
    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiesAt'));
        return new Date().getTime() < expiresAt;
    }

}