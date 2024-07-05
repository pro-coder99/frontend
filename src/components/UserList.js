import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/v1/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul style={{listStyle: "none"}}>
        {users.map((user) => (
          <li key={user.id}>{user.id} ) {user.firstname} {user.lastname} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
