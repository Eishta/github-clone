
import React from 'react'
import '../styles/user.css';
import User from './User';

 const UserList = ({ usersList }) => {
  return (
    <ul className="table-list" >
      {usersList.map(user => <User key={user.id} userData={user} />)}
    </ul>
  )
}

export default UserList;