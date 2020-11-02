import React from 'react';
import { Route, Switch } from 'react-router';

import { Home, NotFound } from '../components';

/*
    Not found component, need be last always.
    If you want to change for Redirect use <Redirect to={'/'} />
*/

export const RoutingConfig = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route render={() => <NotFound />} />
  </Switch>
);
