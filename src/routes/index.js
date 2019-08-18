import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Meetapp from '../pages/Meetapp';
import MeetappDetail from '../pages/MeetappDetail';
import MeetapppUpdate from '../pages/MeetappUpdate';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/meetap" exact component={Meetapp} isPrivate />
      <Route path="/meetap/details" exact component={MeetappDetail} isPrivate />
      <Route path="/meetap/edit" component={MeetapppUpdate} isPrivate />
    </Switch>
  );
}
