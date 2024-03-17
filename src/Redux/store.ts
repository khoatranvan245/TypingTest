import { configureStore } from '@reduxjs/toolkit'
import keyboardInputReducer from './state/keyboardInput'

export const store = configureStore({
  reducer: {
    keyboardInput: keyboardInputReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
