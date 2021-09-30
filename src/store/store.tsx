import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducer } from "./entities";

export default configureStore({
  reducer,
  middleware: [thunk],
});
