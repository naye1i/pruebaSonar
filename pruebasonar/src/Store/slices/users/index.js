import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserList } = userSlice.actions;

export const fetchAllUsers = () => {
  return (dispatch) => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        dispatch(setUserList(response.data.data));
      })
      .catch((error) => console.log("error", error));
  };
};
