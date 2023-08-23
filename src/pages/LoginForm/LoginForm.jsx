import { Button } from 'components/Form/SimpleForm.styled';
import {
  FormStyled,
  InputStyled,
  LableStyled,
} from 'pages/RegistrationForm/RegistrationForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUserThunk } from 'redux/auth/authThuncs';
const userDefault = {
  name: '',
  email: '',
  password: '',
};
const LoginForm = () => {
  const [user, setUser] = useState(userDefault);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUserThunk(user));
    setUser(userDefault);
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <LableStyled>
        <span>Email</span>
        <InputStyled type="email" name="email" onChange={handleChange} />
      </LableStyled>
      <LableStyled>
        <span>Password</span>
        <InputStyled type="password" name="password" onChange={handleChange} />
      </LableStyled>
      <Button type="submit">Sign In</Button>
    </FormStyled>
  );
};
export default LoginForm;
