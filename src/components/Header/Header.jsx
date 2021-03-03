import React from 'react';
import "./Header.sass";

const Header = ({theme, toggleTheme}) => {
  return (
    <header 
      className="header"
      style={{
        background: theme.isDarkMode ? theme.colors.black : theme.colors.white,
        color: theme.isDarkMode ? theme.colors.white : theme.colors.black,
      }}>
        <h1>Hello, Ingrad</h1>
        <button onClick={toggleTheme}>change theme</button>
    </header>
  )
}

export default Header
