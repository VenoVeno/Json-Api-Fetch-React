import React from 'react';
import './App.scss';

import UserProfile from './component/user-profile/user-profile.component';
import UserList from './component/user-list/user-list.component';

function App() {
  return (
    <div className='App'>
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile
        name='Veno'
        email='venodpi@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;
