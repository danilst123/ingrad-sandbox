import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import "./Navigation.sass";
import { Link } from 'react-router-dom';
import { setActiveNavLink } from '../../redux/navigation/actions';
import IconFont from '../IconFont/IconFont';

const NavigationItem = ({page, index, isActive}) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  
  return (
    <Link 
      to={page.link} 
      className="navigation-item"
      data-active={isActive}
      data-dark={theme.isDarkMode}
      onClick={() => dispatch(setActiveNavLink(index))}
      >
        <IconFont className="navigation-item__icon" icon={page.icon} />
        <span className="navigation-item__title">{page.title}</span>
    </Link>
  )
}

const Navigation = ({pages}) => {
  const navigation = useSelector(state => state.navigation);

  return (
    <nav className="navigation">
      { pages.map((page, index) => 
        <NavigationItem
          key={index}
          index={index}
          page={page}
          isActive={index === navigation.activeLinkIndex} 
        />) 
      }
    </nav>
  )
}

Navigation.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string
  })).isRequired
}

Navigation.defaultProps = {
  pages: {
    icon: ""
  }
}

NavigationItem.propTypes = {
  page: PropTypes.object.isRequired, 
  index: PropTypes.number.isRequired, 
  isActive: PropTypes.number.isRequired
}

export default Navigation
