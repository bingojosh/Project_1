import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage'
import MainPage from './Pages/MainPage'

const App = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/main" component={MainPage} />
    </Switch>
  </div>
</Router> 
)

export default App;
