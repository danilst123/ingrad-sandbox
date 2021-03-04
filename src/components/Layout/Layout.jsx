import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Feed from '../Feed/Feed';
import Header from '../Header/Header';

import "./Layout.sass";

const Layout = () => {
  return (
    <main className="layout">
      <div className="layout__header" >
        <Header/>
      </div>
      <aside className="layout__aside" >
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
    </main>
  )
}

export default Layout;
