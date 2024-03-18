import { configureStore } from '@reduxjs/toolkit'
import keyboardInputReducer from './state/keyboardInput'
import caretPositionReducer from './state/caretPosition'

export const store = configureStore({
  reducer: {
    keyboardInput: keyboardInputReducer,
    caretPostion: caretPositionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
