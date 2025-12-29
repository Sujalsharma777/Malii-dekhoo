import { configureStore } from '@reduxjs/toolkit'
import  authreducer from '../Features/authSlice'
import ItemsSlice from '../Features/ItemsSlice'
import AppointmentSlice from '../Features/AppointmentSlice'
export const store = configureStore({
  reducer: {
    auth: authreducer,
    items : ItemsSlice,
    Appointment:AppointmentSlice,
  },
})
