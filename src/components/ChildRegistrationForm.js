// ChildRegistrationForm.js
import React, { useState } from 'react';
import './ChildRegistrationForm.css'; // Import the CSS file

const ChildRegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'Male',
    immunizations: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({ ...formData, [name]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    onRegister(formData);
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: 'Male',
      immunizations: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Immunizations:
          <select
            name="immunizations"
            multiple
            value={formData.immunizations}
            onChange={handleMultiSelectChange}
            required
          >
            <option value="BCG">BCG</option>
            <option value="MMR">MMR</option>
            <option value="RV">RV</option>
            <option value="DTaP">DTaP</option>
          </select>
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default ChildRegistrationForm;
