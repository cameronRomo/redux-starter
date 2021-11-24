// import { combineReducers } from "redux";
// import bugsReducer from "./bugs";
// import projectsReducer from "./projects";

// export default combineReducers({
//   bugs: bugsReducer,
//   projects: projectsReducer,
// });

import { combineReducers } from 'redux';
import entitiesReducer from './entities';
export default combineReducers({
  entities: entitiesReducer,
})
