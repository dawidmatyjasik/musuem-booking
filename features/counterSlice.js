import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fontSize: 'small',
  theme: 'light',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateFontSize: (state, action) => {
      state.fontSize = action.payload
    },
    updateTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateFontSize, updateTheme } = counterSlice.actions

export default counterSlice.reducer
