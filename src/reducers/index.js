import { userReducer } from "./userReducer";
import { groupReducer } from "./groupReducer";

const mainReducer = ({ users, groups }, action) => {
  return {
    users: userReducer(users, action),
    groups: groupReducer(groups, action)
  };
};

export default mainReducer;
