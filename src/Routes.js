import React from 'react';
import { Switch, Redirect } from 'react-router';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Book as BookView,
  SignupSimple as SignupSimpleView,
  CreateClub as CreateClubView,
  NotFound as NotFoundView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/home' />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path='/home'
      />
      <RouteWithLayout
        component={BookView}
        exact
        layout={MainLayout}
        path='/books/:id'
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MainLayout}
        path='/signup'
      />
      <RouteWithLayout
        component={CreateClubView}
        exact
        layout={MainLayout}
        path='/create-club'
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path='/not-found'
      />
      <Redirect to='/not-found' status='404' />
    </Switch>
  );
};

export default Routes;
