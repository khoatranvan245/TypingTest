import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type caretPositonState = {
  top: string
  left: string
}

const initialState: caretPositonState = {
  top: '0px',
  left: '0px',
}

const caretPositonSlice = createSlice({
  name: 'caretPosition',
  initialState,
  reducers: {
    updatePosition: (state, action: PayloadAction<caretPositonState>) => {
      state.top = action.payload.top
      state.left = action.payload.left
    },
  },
})

export default caretPositonSlice.reducer
export const { updatePosition } = caretPositonSlice.actions
