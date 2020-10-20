
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Cheese, Board, User, Survey } from './templates';
import { Navi } from './components';

import { UserModify, UserMyPage, UserSignIn_wd, UserSignUp_wd, UserWithdraw_wd } from './container/user'
import { Cheese_Del } from './container/cheese'

const Main = () => (<>

    <Router>
        <Navi/>
        <Switch>
            <Route exact path='/' component={ Home }></Route>
            <Route path="/cheese" component = { Cheese }/>
            <Route path="/board" component = { Board }/>
            <Route path="/user" component = { User }/>
            <Route path="/survey" component = { Survey }/>

            <Route path='/mypage_user' component = { UserMyPage }/>
            <Route path='/info_modify_user' component = { UserModify }/>
            <Route path='/sign_in_user' component = { UserSignIn_wd }/>
            <Route path='/sign_up_user' component = { UserSignUp_wd }/>
            <Route path='/membership_withdrawal_user' component = { UserWithdraw_wd }/>

            <Route path='/remove_cheese' component = { Cheese_Del }/>
        </Switch>
    </Router>
    
</>)

export default Main;
