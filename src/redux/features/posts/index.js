import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: []
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setList } = postsSlice.actions

export default postsSlice.reducer