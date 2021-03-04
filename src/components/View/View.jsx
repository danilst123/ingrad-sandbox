import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ColorsContext from '../../Context/ColorsContext/ColorsContext';
import "./View.sass";

const View = ({children}) => {
  const colors = useContext(ColorsContext);
  const theme = useSelector(state => state.theme);

  console.log(colors, theme);
  
  return (
    <div 
      className="view"
      style={{
        background: theme.isDarkMode ? colors.black : colors.white,
        color: theme.isDarkMode ? colors.white : colors.black,
      }}
    >
      {children}
    </div>
  )
}

export default View
