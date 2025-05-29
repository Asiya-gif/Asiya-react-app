import React from 'react';

function UserList() {
  const users = ['Asiya', 'Mohamed', 'Ali', 'Ahmed', 'Fatima'];

  return (
    <div className="section">
      <h2>👥 User List</h2>
      <ul>
        {users.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
