import { SET_ACTIVE_NAV_LINK } from "./types";

const initialState = {
  activeLinkIndex: 0
};

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_NAV_LINK: return {
      activeLinkIndex: action.payload
    };  
    default: return state;
  }
}
