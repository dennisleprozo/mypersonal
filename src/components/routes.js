import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import LandingPage from './LandingPage/LandingPage';
import Men from './Men/Men';
import Navigation from './Navigation/Navigation';




export default (
   <Switch>
      <Route exact path ='/' component={Dashboard}/>
      <Route  path ='/login' component={Login}/>
      <Route  path ='/landingpage' component={LandingPage}/>
      <Route  path ='/men' component={Men}/>
      <Route  path ='/navi' component={Navigation}/>


   </Switch>
)

