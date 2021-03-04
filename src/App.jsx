import React from 'react';

import View from './Components/View/View';
import Layout from './Components/Layout/Layout';

import ThemeContext, { colors, isDarkMode } from './Context/ThemeContext/ThemeContext';

import "./App.sass";

const App = () => {
  return (
    <ThemeContext.Provider value={{colors, isDarkMode}}>
      <View>
        <Layout />
      </View>
    </ThemeContext.Provider>
  )
}

export default App
