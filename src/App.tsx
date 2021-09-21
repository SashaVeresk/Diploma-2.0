import React from 'react';
import { Counter } from './features/counter/Counter';
import { Home } from './components/home/home';
import {Route, Switch} from 'react-router'
import { MonthStatistics } from './components/monthStatistics/monthStatistics';
import { Header } from './components/shared/header/header';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/month-statistics" exact component={MonthStatistics} />
      </Switch>      
    </div>
  );
}

export default App;