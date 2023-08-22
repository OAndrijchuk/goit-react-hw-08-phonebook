import { createSelector } from '@reduxjs/toolkit';

export const selectToken = state => {
  console.log(state);
  return state.auth.token;
};
export const selectIsAuth = createSelector(
  [state => state.auth.isAuth],
  isAuth => isAuth
);
export const selectUserEmail = createSelector(
  [state => state.auth.user.email],
  userEmail => userEmail
);
export const selecIsRefresh = createSelector(
  [state => state.auth.isRefreshing],
  isRefreshing => isRefreshing
);
