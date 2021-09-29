import React from 'react';
import { Counter } from './features/counter/Counter';
import { Home } from './components/home/home';
import {Route, Switch} from 'react-router'
import { MonthStatistics } from './components/monthStatistics/monthStatistics';
import { Header } from './components/shared/header/header';
import { PopUp } from './components/shared/popUp/popUp';

function App() {
  return (
    <div className="mainWrapper">
       {/* <PopUp /> */}
      <div className="container">
       
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/month-statistics" exact component={MonthStatistics} />
        </Switch>      
      </div>
    </div>  
  );
}

export default App;