import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUpUserThunk,
  logInUserThunk,
  currentUserThunk,
  logOutUserThunk,
} from './authThuncs';

const allThunks = keyWord => {
  const thunks = [
    signUpUserThunk,
    logInUserThunk,
    logOutUserThunk,
    currentUserThunk,
  ];
  return thunks.map(thunk => thunk[keyWord]);
};

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  error: '',
  isAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(logOutUserThunk.fulfilled, (state, { payload }) => {
        state.user = {
          name: '',
          email: '',
        };
        state.isAuth = false;
        state.token = '';
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(signUpUserThunk.fulfilled, logInUserThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.isAuth = true;
          state.token = payload.token;
          state.isRefreshing = false;
        }
      )

      .addMatcher(isAnyOf(...allThunks('pending')), (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addMatcher(isAnyOf(...allThunks('rejected')), (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
