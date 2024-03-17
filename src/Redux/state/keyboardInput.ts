import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface keyboardInputState {
  value: string
}

const initialState: keyboardInputState = {
  value: '',
}

const keyboardInputSlice = createSlice({
  name: 'keyboardInput',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {updateInput} = keyboardInputSlice.actions
export default keyboardInputSlice.reducer
