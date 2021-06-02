import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    authenticate: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
    }
  }
})

// Action creators are generated for each case reducer function
export const { authenticate } = authSlice.actions

export default authSlice.reducer