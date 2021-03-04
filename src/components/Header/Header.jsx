import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/actions';
import "./Header.sass";

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className="header">
      <h1>Hello, Ingrad</h1>
      <span onClick={() => dispatch(toggleTheme())} className="icon-font if-view"></span>
    </header>
  )
}

export default Header
