import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import photo from "./photo";

export const reducer = combineReducers({
  photo,
});
export type RootState = StateType<typeof reducer>;
