import React from 'react';
import App from './App'
 
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import {store} from "./redux/store";
import {Provider as ReduxProvider} from 'react-redux';


const container = document.getElementById('chatApp');
const root = createRoot(container); 
root.render(
<>

<ReduxProvider store={store}/>

<App/>
</>


);
