import React, { useState } from 'react';
import {
  FormStyled,
  InputStyled,
  LableStyled,
} from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { signUpUserThunk } from 'redux/auth/authThuncs';
import { Button } from 'components/Form/SimpleForm.styled';

const userDefault = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const [user, setUser] = useState(userDefault);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUpUserThunk(user));
    setUser(userDefault);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LableStyled>
        <span> Name</span>
        <InputStyled type="text" name="name" onChange={handleChange} />
      </LableStyled>
      <LableStyled>
        <span>Email</span>
        <InputStyled type="email" name="email" onChange={handleChange} />
      </LableStyled>
      <LableStyled>
        <span>Password</span>
        <InputStyled type="password" name="password" onChange={handleChange} />
      </LableStyled>
      <Button type="submit">Sign Up</Button>
    </FormStyled>
  );
};
export default RegistrationForm;
