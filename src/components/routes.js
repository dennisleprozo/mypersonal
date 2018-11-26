import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import LandingPage from './LandingPage/LandingPage';


export default (
   <Switch>
      <Route exact path ='/' component={Dashboard}/>
      <Route  path ='/login' component={Login}/>
      <Route  path ='/landingpage' component={LandingPage}/>
           
   </Switch>
)

