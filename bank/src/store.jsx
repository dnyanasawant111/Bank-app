import { configureStore } from '@reduxjs/toolkit'

import counterapp from "./slice"

export const store = configureStore({
  reducer: {
    count:counterapp
  },
})