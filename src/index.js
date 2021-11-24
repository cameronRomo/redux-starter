import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs';
import configureStore from './store/configureStore';
import { projectAdded } from "./store/projects";
import { userAdded } from './store/users';


const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
})

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}));
store.dispatch(projectAdded({ name: "project 1"}));
store.dispatch(bugAdded({ description: "Bug 1"}));
store.dispatch(bugAdded({ description: "Bug 2"}));
store.dispatch(bugAdded({ description: "Bug 3"}));
store.dispatch(bugResolved({ id: 1 }));

getBugsByUser(1)(store.getState())

const getUnresolvedBugs = getUnresolvedBugs(store.getState());
