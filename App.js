import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  };

  function deleteUser(index) {
    setUsers(users.filter((user, i) => i !== index));
  };

  function updateUser(index, updateuser) {
    const updatedUsers = users.map((user, i) => (i === index ? updateuser : user));
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1 >User Information</h1>
      <Form addUser={addUser} />
      <h1>User List</h1>
      <List users={users} deleteUser={deleteUser} updateUser={updateUser} />
      </>

  );
}

export default App;
