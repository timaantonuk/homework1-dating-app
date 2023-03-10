import React from 'react';
import { users } from '../api/user.api';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import TableRowComponent from './TableRowComponent';

const Users = () => {
  const [usersData, setUsersData] = useState(users);

  const deleteUserRow = (id) => {
    const userForDelete = usersData.find((user) => user._id === id);
    setUsersData(usersData.filter((user) => user !== userForDelete));
  };

  return (
    <div className='container py-5'>
      <h1 className='badge bg-primary fs-3'>
        {usersData.length} people are waiting for your call
      </h1>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Qualities</th>
            <th scope='col'>Job</th>
            <th scope='col'>Dates quantity</th>
            <th scope='col'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <TableRowComponent
              profession={user.profession.name}
              qualities={user.qualities}
              name={user.name}
              key={user._id}
              completedMeetings={user.completedMeetings}
              rate={user.rate}
              deleteUserRow={() => deleteUserRow(user._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
