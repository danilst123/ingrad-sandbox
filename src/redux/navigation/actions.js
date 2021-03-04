import { SET_ACTIVE_NAV_LINK } from "./types"

export const setActiveNavLink = (index) => {
  return {
    type: SET_ACTIVE_NAV_LINK,
    payload: index
  }
}