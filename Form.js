
import React, { useState } from 'react';

function Form({ addUser }) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [ageerror, setageError] = useState();
  const [mobileerror, setmobileError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (age < 0 || age > 150) {
      setageError('Age must be between 0 and 150.');
    } 
    else if (!/^\d{10}$/.test(mobile)) {
      setmobileError('Mobile number must be exactly 10 digits.');
    } else {
      addUser({ name, age, mobile, city });
      setName('');
      setAge('');
      setMobile('');
      setCity('');
      setageError('');
      setmobileError('');
    
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='container' >
        <label>Name:</label>

        <input type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required />
        {ageerror && <p style={{ color: 'red' }}>{ageerror}</p>}
        <label>Age: </label>
        <input type="number" value={age} placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} required />
        {mobileerror && <p style={{ color: 'red' }}>{mobileerror}</p>}
        <label>Mobile Number:</label>
        <input type="number" value={mobile} placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} required />
        <label>City:   </label>

        <select className='city' value={city} onChange={(e) => setCity(e.target.value)} required>
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
        <button className='btn' type="submit">Add User</button>
      </div>
    </form>
  );
}

export default Form;
