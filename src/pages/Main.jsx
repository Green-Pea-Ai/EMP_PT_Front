import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Cheese, Board, Survey, User } from '../pages';

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Router>
                <Route path="/cheese" to = { Cheese }/>
                <Route path="/board" to = { Board }/>
                <Route path="/survey" to = { Survey }/>
                <Route path="/user" to = { User }/>
            </Router>
        </Switch>
    </BrowserRouter>

</>

export default Main;