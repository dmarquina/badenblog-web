import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Router>
        <AppRoutes  />
    </Router>, 
    document.getElementById('root')

);
registerServiceWorker();
