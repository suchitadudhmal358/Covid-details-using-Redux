import { DISPLAY_USERS } from "./action-types";

export const displayUsers = (users) => ({
  type: DISPLAY_USERS,
  payload: users,
});
