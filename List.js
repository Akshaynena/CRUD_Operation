import React, { useState } from 'react';

function List({ users, deleteUser, updateUser }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    city: ''
  });

  const handleEdit = (index, user) => {
    setIsEditing(index);
    setEditFormData(user);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleSave = (index) => {
    updateUser(index, editFormData);
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  return (
    <div className='user-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile Number</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {isEditing === index ? (
                <>
                  <td><input type="text" name="name" value={editFormData.name} onChange={handleChange} /></td>
                  <td><input type="number" name="age" value={editFormData.age} onChange={handleChange} /></td>
                  <td><input type="text" name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
                  <td>
                    <select name="city" value={editFormData.city} onChange={handleChange}>
                      <option value="" disabled>Select a city</option>
                      <option value="Mumbau">Mumbai</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Surat">Surat</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Bhopal">Bhopal</option>
                      <option value="Patna">Patna</option>
                      <option value="Goa">Goa</option>
                      <option value="Kolkata">Kolkata</option>
                    </select>
                  </td>
                  <td>
                    <button className='btn-primary' onClick={() => handleSave(index)}>Save</button>
                    <button className='btn-primary' onClick={handleCancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.mobile}</td>
                  <td>{user.city}</td>
                  <td>
                    <button className='btn-primary' onClick={() => handleEdit(index, user)}>Edit</button>
                    <button className='btn-primary' onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
