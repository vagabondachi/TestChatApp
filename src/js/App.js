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

import HomeView from './layouts/dashboard/SideNav';
import ChatCreate from './views/ChatCreate';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import LoadingView from './components/shared/LoadingView';
import GeneralApp from './dashboard/GeneralApp';
import DashboardLayout from './layouts/dashboard';



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



function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({auth}) => auth.isChecking);
  const isOnline = useSelector(({app}) => app.isOnline);

  // Wrapper
  const ContentWrapper = ({children}) => <div>{children}</div>
  

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
    
        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>

          {/* Need to wrap the GeneralApp with the Homeview */}
    
          <AuthRoute path="/home">
            <DashboardLayout/>
           
            </AuthRoute>
          
        </Switch>
       
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