import { UserProfileNavigationConstraints } from "./Constraints";

export const ProfileNavigationReducer = (state = null, action) => {
    
  if (action.type === UserProfileNavigationConstraints) {
    return action.data;
  } else {
    return state; // Return the current state for actions of different types
  }
};

export const filterDataReducer = (state = null, action) => {
  if (action.type === UserProfileNavigationConstraints) {
    return action.data;
  } else {
    return state; // Return the current state for actions of different types
  }
};
