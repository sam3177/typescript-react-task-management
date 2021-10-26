import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import userReducer from "./logedUser";

export default combineReducers({
  entities: entitiesReducer,
  user: userReducer
});
