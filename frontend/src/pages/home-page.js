import React from 'react';
import { Subscribe } from 'unstated';

import UserContainer from '../containers/user.container';

const HomePage = () => {
  return (
    <Subscribe to={[UserContainer]}>
      {user => (
        <div>
            Home Page
        </div>
      )}
    </Subscribe>
  )
}

export default HomePage;