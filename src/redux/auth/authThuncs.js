import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  remove() {
    API.defaults.headers.common.Authorization = '';
  },
};

export const signUpUserThunk = createAsyncThunk(
  'auth/createUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logInUserThunk = createAsyncThunk(
  'auth/logInUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutUserThunk = createAsyncThunk(
  'auth/logOutUser',
  async (credentials, thunkAPI) => {
    try {
      await API.post('/users/logout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUserThunk = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const newToken = state.auth.token;
    if (!newToken) {
      return thunkAPI.rejectWithValue('NO autorization!!!');
    }
    token.set(newToken);
    try {
      const { data } = await API.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// some
// some@mail.cm
// some@mail.cm
