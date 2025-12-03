import { configureStore } from '@reduxjs/toolkit'
import  authreducer from '../Features/authSlice'
export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
})
