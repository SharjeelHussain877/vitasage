import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state,action) => {
      state.value = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload  // action .payload me wo value aati hai jo incrementByAmount ke argument me aati hai
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer