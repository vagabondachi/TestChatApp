import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreProvider from './store/StoreProvider';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { listenToAuthChanges } from './actions/auth';
import { listenToConnectionChanges } from './actions/app';
import { checkUserConnection } from './actions/connection';


import WelcomeView from './views/Welcome';
import LoadingView from './components/shared/LoadingView';
import DashboardLayout from './layouts/dashboard';



function AuthRoute({ children, ...rest }) {
  const user = useSelector(({ auth }) => auth.user)
  const onlyChild = React.Children.only(children);


  return (
    <Route
      {...rest}
      render={props =>
        user ?
          React.cloneElement(onlyChild, { ...rest, ...props }) :
          <Redirect to="/" />
      }
    />
  )
}



function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline);



  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());
    const unsubFromUserConnection = dispatch(checkUserConnection());


    return () => {
      unsubFromAuth();
      unsubFromConnection();
      unsubFromUserConnection();

    }
  }, [dispatch])

  if (!isOnline) {
    return <LoadingView message="Application has been disconnected from the internet. Please reconnect..." />
  }

  if (isChecking) {
    return <LoadingView />
  }


  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <WelcomeView />
        </Route>


        <AuthRoute path="/home">
          <DashboardLayout />
        </AuthRoute>

      </Switch>

    </Router>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  )
}