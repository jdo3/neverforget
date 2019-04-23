import React from 'react';
import { Subscribe } from 'unstated';

import UserContainer from '../containers/user.container';
import SignIn from '../components/sign-in';;

const SignInPage = () => {
    return (
        <Subscribe to={[UserContainer]}>
            {user => (
                <SignIn userContainer={user} />
            )}
        </Subscribe>
    )
}

export default SignInPage;