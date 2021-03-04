import { TOGGLE_THEME } from "./types";

const initialState = {
  isDarkMode: false
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: return {
      isDarkMode: !state.isDarkMode
    };  
    default: return state;
  }
}
