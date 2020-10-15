
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Cheese, Board, User, Survey } from './pages';
import { Navi } from './components';

const Main = () => (
    <>
    <Router>
        <Navi/>
        <Switch>
            <Route exact path='/' component={ Home }></Route>
            <Route path="/cheese" component = { Cheese }></Route>
            <Route path="/board" component = { Board }></Route>
            <Route path="/user" component = { User }></Route>
            <Route path="/survey" component = { Survey }></Route>
        </Switch>
    </Router>

    </>
)

export default Main;
