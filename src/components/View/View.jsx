import React from 'react';
import "./View.sass";

const View = ({children}) => {
  return (
    <div className="view">
      {children}
    </div>
  )
}

export default View
