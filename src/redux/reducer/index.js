import { combineReducers } from "redux";
import dictionary from "./dictionary";
import quiz from "./quiz";

export default combineReducers({
  dictionary,
  quiz,
});
