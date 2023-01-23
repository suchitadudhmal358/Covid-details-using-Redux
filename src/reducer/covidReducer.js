import { STATEWISE_COVID_DATA } from "../action/action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case "STATEWISE_COVID_DATA":
      return { ...action.payload };
    default:
      return state;
  }
};
