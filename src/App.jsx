import React from 'react';

import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';

import ThemeContext, { colors, isDarkMode } from './Context/ThemeContext/ThemeContext';

import "./App.sass";

const App = () => {
  return (
    <ThemeContext.Provider value={{colors, isDarkMode}}>
      <Header />
      <Layout />
    </ThemeContext.Provider>
  )
}

export default App
