
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledTable, StyledButton } from './styles';
import EditForm from '../EditForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(err => console.log(err));
  };

  const handleEdit = (editUser) => {
    const editUsers = users.map(user => {
      if (user._id === editUser._id) {
        return editUser;
      }
      return user;
    });
    setUsers(editUsers);
    setEditingUser(null);
  };

  return (
    <div>
      {editingUser ? (
        <EditForm user={editingUser} onUpdate={handleEdit} />
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Age</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><StyledButton onClick={() => handleDelete(user._id)}>Delete</StyledButton></td>
                <td><StyledButton onClick={() => setEditingUser(user)}>Edit</StyledButton></td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};

export default UserList;


