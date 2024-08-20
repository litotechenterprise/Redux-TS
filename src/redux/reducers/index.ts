import { combineReducers } from "redux";
import repositoryReducer from "./repositories";

const reducers = combineReducers({
  repositories: repositoryReducer,
});

export default reducers;
