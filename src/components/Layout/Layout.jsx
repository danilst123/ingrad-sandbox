import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Feed from '../../Pages/Feed/Feed';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

import { navigationLinks } from '../../Assets/data';

import "./Layout.sass";

const Layout = () => {
  return (
    <Router>
      <main className="layout">
        <div className="layout__header" >
          <Header/>
        </div>
        <aside className="layout__aside" >
          <div className="layout__sticky">
            <Navigation pages={navigationLinks} />
          </div>
        </aside>
        <article className="layout__article">
          <Switch>
            <Route path="/" exact component={Feed} />
          </Switch>
        </article>
        <aside className="layout__aside">
          <div className="layout__sticky">3</div>
        </aside>
      </main>
    </Router>
  )
}

export default Layout;
