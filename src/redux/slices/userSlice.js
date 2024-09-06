import { createSlice } from '@reduxjs/toolkit'
// action .payload me wo value aati hai jo incrementByAmount ke argument me aati hai
const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload
    },
    removeUser: (state, action) => {
      state.value = state.value.filter(elem => elem.id != action.payload)
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer