import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from './auth/authThuncs';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const respons = await API.get('/contacts');

      return respons.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const respons = await API.post('/contacts', contact);
      return respons.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const respons = await API.delete(`/contacts/${id}`);
      return respons.data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
