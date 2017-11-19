import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import NewPost from './components/NewPost';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newPost" component={NewPost} />
            <Route component={Page404} />
        </Switch>
    </App>
export default AppRoutes;