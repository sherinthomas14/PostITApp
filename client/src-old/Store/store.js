import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "../Features/UserSlice";

export const store = configureStore({
  reducer: {
    users:usersReducer,
  },
})
