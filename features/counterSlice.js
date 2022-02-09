import { createSlice } from '@reduxjs/toolkit'
import db from '../data/db'

const initialState = {
  fontSize: 'small',
  theme: 'theme-light',
  db: db,
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
    updateData: (state, action) => {
      state.db = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateFontSize, updateTheme, updateData } = counterSlice.actions

export default counterSlice.reducer
