import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ThemeContext from '../../Context/ThemeContext/ThemeContext';

import Feed from '../Feed/Feed';
import Header from '../Header/Header';

import "./Layout.sass";

const Layout = () => {
  const context = useContext(ThemeContext);
  const [theme, setTheme] = useState(context);

  return (
    <main 
      className="layout"
      style={{
        background: theme.isDarkMode ? theme.colors.black : theme.colors.white,
        color: theme.isDarkMode ? theme.colors.white : theme.colors.black,
      }}>
      <div className="layout__grid">
        <div className="layout__header">
          <Header theme={theme} toggleTheme={() => setTheme({...theme, isDarkMode: !theme.isDarkMode})} />
        </div>
        <aside className="layout__aside">
          <div className="layout__sticky">1</div>
        </aside>
        <article className="layout__article">
          <Router>
            <Switch>
              <Route path="/" exact component={Feed} />
            </Switch>
          </Router>
        </article>
        <aside className="layout__aside">
          <div className="layout__sticky">3</div>
        </aside>
      </div>
    </main>
  )
}

export default Layout
