import { createSlice } from "@reduxjs/toolkit";
import User from './types/User'

const slice = createSlice({
  name: "user",
  initialState: {
    data:{}
  },
  reducers: {
    userLogedIn: (user, action) => {
			localStorage.setItem('user',JSON.stringify(action.payload))
      user.data = action.payload
    },
    userLogedOut:(user, action) => {
      localStorage.removeItem('user')
      user.data = {};
    }
  }
});

const { userLogedIn, userLogedOut } = slice.actions;

export default slice.reducer;

export const registerUserInfo = (user: User) => ({
  type: userLogedIn.type,
  payload: user
})
export const logOut = ()=> ({
  type: userLogedOut.type,
  payload: ''
})






