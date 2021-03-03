import React from 'react';

export const isDarkMode = false;

export const colors = {
  white: "#FFFFFF",
  yellow1: "#F5DB52",
  yellow2: "#FAF3C8",
  yellow1Stroke: "#EED342",
  yellow2Stroke: "#F8F0BE",
  black: "#323334",
  darkGrey: "#6F7781",
  grey: "#9DA7AE",
  greyStroke: "#E7ECEF",
  lightGrey: "#F1F4F5",
  darkMode: {
    white: "#E1E3E6",
    grey1: "#C7CBD1",
    grey2: "#A9ACAF",
    greyStroke: "#444549",
    darkGrey: "#2A2A2E",
    yellowStroke: "#CBAE13"
  },
  secondary: {
    green: "#28B943",
    yellow: "#FABC1D",
    red: "#F1472E",
    darkRed: "#881D2E",
  }
}

const ThemeContext = React.createContext();

export default ThemeContext;