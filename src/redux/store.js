import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './userSlice'
export const store = configureStore({
  reducer: {
    counter:counterSlice
  },
})
