import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm, StyledLabel, StyledInput, StyledButton,StyledFormContainer,StyledBtnContainer } from './styles';


const EditForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    age: user.age
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${user._id}`, formData)
      .then(res => {
        onUpdate(res.data);
      })
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <StyledFormContainer>
    <StyledForm onSubmit={handleSubmit}>
      <h1>Edit form</h1>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Surname:
        <StyledInput
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Email:
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Age:
        <StyledInput
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </StyledLabel>
      <StyledBtnContainer><StyledButton type="submit">Edit</StyledButton></StyledBtnContainer>
      
    </StyledForm>
    </StyledFormContainer>
  );
};

export default EditForm;