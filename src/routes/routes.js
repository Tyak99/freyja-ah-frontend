import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login';
import Profile from '../views/Profile/Profile';
import Dashboard from '../views/Dashboard/Dashboard';
import ViewModule from '../views/ViewModule';
import NotFound from '../views/NotFound';
import signUpPage from '../views/Signup/SignUp';
import ResetPassword from '../views/ResetPassword/ResetPassword';
import changePassword from '../views/ChangePassword/changePassword';
import VerifyUserPage from '../views/VerifyUser/verifyUser';
import CommunityPage from '../views/Community/CommunityPage';
import Messaging from '../views/Messaging/Messaging';

import About from '../views/AboutUs/AboutUs';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={signUpPage} />
    <Route path="/login" component={Login} />
    <Route path="/aboutus" component={About} />
    <Route path="/profile" component={Profile} />
    <Route path="/password-reset" component={ResetPassword} />
    <Route path="/change-password" component={changePassword} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/verify" component={VerifyUserPage} />
    <Route path="/view-module/:moduleId" component={ViewModule} />
    <Route path="/community" component={CommunityPage} />
    <Route path="/messaging" component={Messaging} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
