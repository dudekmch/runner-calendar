import {createSlice} from '@reduxjs/toolkit';

export interface ICurrentUser {
    email: string | null,
    token: string | null,
}

const authInitState = {
    currentUser: null as ICurrentUser | null
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {
      setUser(state, action) {
        state.currentUser = action.payload
      }
    },
  });

  export const authActions = authSlice.actions;
  export const authReducers = authSlice.reducer;