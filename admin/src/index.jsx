require('./scss/pomby.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import SideNav from './components/sidenav.jsx';

import PageDashboard from './pages/dashboard.jsx';
import PageSettings from './pages/settings.jsx';
import PageInfo from './pages/info.jsx';

let IE = false;
if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
   IE = true;
}

if(!IE){
  ReactDOM.render((
    <Router>
      <div id="flex-wrapper">
        <SideNav />
        <div id="content">
          <Route exact path="/" component={PageDashboard} />
          <Route path="/settings" component={PageSettings} />
          <Route path="/info" component={PageInfo} />
        </div>
      </div>
    </Router>
  ), document.getElementById('root'));
}else{
  document.getElementById('root').innerHTML = 'Sorry IE is not supported, please use Edge or a modern browser.';
}
