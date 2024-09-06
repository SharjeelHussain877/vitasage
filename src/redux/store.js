import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/userSlice'
export const store = configureStore({
  reducer: {
    users:counterSlice
  },
})
