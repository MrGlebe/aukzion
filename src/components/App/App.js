import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import {TopNav} from '../TopNav/TopNav';
import { MainPage } from '../../pages/MainPage';
import {CarPage} from '../../pages/CarPage';

function App() {
  return (
      <Router>
          <div className="app-wrapper">
             <TopNav />
             <Switch>
              <Route path="/" component={ MainPage } exact />
              <Route path="/car_page" component={ CarPage } exact />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
      </Router>
  );
}

export default App;
