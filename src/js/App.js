import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'; 
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

import HomeView from './views/Home';
import ChatView from './views/Chat';
import ChatCreate from './views/ChatCreate';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import LoadingView from './components/shared/LoadingView';



function AuthRoute({children, ...rest}) {
  const user = useSelector(({auth})=> auth.user)
  const onlyChild = React.Children.only(children);

  return (
    <Route
    {...rest}
    render = {props =>
      user ? 
        React.cloneElement(onlyChild, {...rest, ...props}) :
        <Redirect to="/" />
    }
    />
  )
}



// const ContentWrapper = ({children}) => <div className='content-wrapper'>{children}</div>


function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({auth}) => auth.isChecking);

  const isOnline = useSelector(({app}) => app.isOnline);

  useEffect(()=>{
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());
    const unsubFromUserConnection = dispatch(checkUserConnection());


    return () => {
      unsubFromAuth();
      unsubFromConnection();
      unsubFromUserConnection();
  
    }
  }, [dispatch])

  if(!isOnline){
    return<LoadingView message="Application has been disconnected from the internet. Please reconnect..."/>
  }

  if(isChecking){
    return<LoadingView/>
  }
 
 
  return (
    <Router>
      {/* <ContentWrapper> */}

        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/chatCreate">
            <ChatCreate />
            </AuthRoute>
          <AuthRoute path="/chat/:id">
            <ChatView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
        </Switch>
        {/* </ContentWrapper> */}
    </Router>  
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp/>
    </StoreProvider>
  )
}