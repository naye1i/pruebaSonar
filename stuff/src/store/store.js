import { configureStore } from "@reduxjs/toolkit";
import stuffReducer from "./stuffSlice";
import userReducer from "./userSlice"

const store = configureStore({
    reducer: {
        stuff: stuffReducer,
        user: userReducer
    }
});

export default store