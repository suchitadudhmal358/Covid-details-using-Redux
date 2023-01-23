import { DISPLAY_USERS } from "../action/action-types";

export default (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_USERS":
      return [...action.payload];

    default:
      return state;
  }
};
