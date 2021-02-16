// Component that Auth0 will redirect to after the user authenticates

import React from 'react';

// The user is redirected to this component after they log in through Auth0
// From here, they will be redirected to the authcheck page and then the home page.
const Callback = props => (
    <div>
        Callback
    </div>
);

export default Callback;