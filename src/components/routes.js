import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import LandingPage from './LandingPage/LandingPage';
import Men from './Men/Men';
import Navigation from './Navigation/Navigation';
import Contact from './Contact/Contact';
import StoreLocator from './StoreLocator/StoreLocator';
import FAQ from './FAQ/FAQ';
import Cart from './Cart/Cart';

export default (
   <Switch>
      <Route exact path ='/' component={Dashboard}/>
      <Route  path ='/login' component={Login}/>
      <Route  path ='/landingpage' component={LandingPage}/>
      <Route  path ='/men' component={Men}/>
      <Route  path ='/navi' component={Navigation}/>
      <Route  path ='/contact' component={Contact}/>
      <Route  path ='/locator' component={StoreLocator}/>
      <Route  path ='/faq' component={FAQ}/>
      <Route  path ='/cart' component={Cart}/>

   </Switch>
)

