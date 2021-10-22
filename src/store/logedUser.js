import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "user",
  initialState: {
    data:{}
  },
  reducers: {
    userLogedIn: (user, action) => {
      user.data = action.payload
    },
    userLogedOut:(user, action) => {
      user.data = {};
    }
  }
});

const { userLogedIn, userLogedOut } = slice.actions;

export default slice.reducer;

export const registerUserInfo = (user) => ({
  type: userLogedIn.type,
  payload: user
})
export const logOut = ()=> ({
  type: userLogedOut.type,
  payload: ''
})






