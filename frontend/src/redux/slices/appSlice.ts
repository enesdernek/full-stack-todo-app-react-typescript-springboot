import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
  theme: "dark" | "light"
}

const initialState: AppState = {
  theme: "light",
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   changeTheme:(state)=>{
       state.theme = state.theme==="light" ? "dark" : "light"
   }
  },
})

export const { changeTheme } = appSlice.actions

export default appSlice.reducer