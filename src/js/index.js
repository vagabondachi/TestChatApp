import React from 'react';
import App from './App'
 
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


const container = document.getElementById('chatApp');
const root = createRoot(container); 
root.render(<App/>);
