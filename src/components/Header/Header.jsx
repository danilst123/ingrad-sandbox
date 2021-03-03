import React, { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext/ThemeContext';
import "./Header.sass";

const Header = () => {
  const context = useContext(ThemeContext);
  const [theme, setTheme] = useState(context);

  return (
    <header 
      className="header"
      style={{
        background: theme.isDarkMode ? theme.colors.black : theme.colors.white,
        color: theme.isDarkMode ? theme.colors.white : theme.colors.black,
      }}>
        <h1>Hello, Ingrad</h1>
        <button onClick={() => setTheme({...theme, isDarkMode: !theme.isDarkMode})}>change theme</button>
    </header>
  )
}

export default Header
