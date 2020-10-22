import React from 'react';
// import Main from './Main';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Navi } from './components';
import { Home, Cheese, Board, User, Survey } from './templates';

import { UserModify, UserMyPage, UserSignIn_wd, UserSignUp_wd, UserWithdraw_wd } from './container/user'
import { Cheese_Del, Cheese_List, Cheese_Modi, Cheese_Reg } from './container/cheese'
import { Board_Create, Board_Del, Board_List, Board_Modi, Board_Read } from './container/board'
import { Survey_Write, Survey_List, Survey_Read } from './container/survey'
// Flask axios Linked
import { Header } from './components'

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { itemReducer } from './container/cheese/CheeseList'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  itemReducer
})

// import './App.css';
// import Home from './pages/Home';

const App = () => (<>

  <Router>
        <Navi/>
        <Switch>
            <Provider store = { createStore(rootReducer, applyMiddleware(ReduxThunk))}>
                <Redirect exact from = {'/'} to = { '/home' }></Redirect>
                <Route path='/home' component={ Home }/>
                <Route path='/header' component = { Header }/>
                <Route path="/cheese" component = { Cheese }/>
                <Route path="/board" component = { Board }/>
                <Route path="/user" component = { User }/>
                <Route path="/survey" component = { Survey }/>

                <Route path='/mypage_user' component = { UserMyPage }/>
                <Route path='/info_modify_user' component = { UserModify }/>
                <Route path='/sign_in_user' component = { UserSignIn_wd }/>
                <Route path='/sign_up_user' component = { UserSignUp_wd }/>
                <Route path='/membership_withdrawal_user' component = { UserWithdraw_wd }/>

                <Route path='/list_cheese' component = { Cheese_List }/>
                <Route path='/register_cheese' component = { Cheese_Reg }/>
                <Route path='/modify_cheese' component = { Cheese_Modi }/>
                <Route path='/remove_cheese' component = { Cheese_Del }/>

                <Route path='/write_board' component = { Board_Create }/>
                <Route path='/list_board' component = { Board_List }/>
                <Route path='/read_board' component = { Board_Read }/>
                <Route path='/edit_board' component = { Board_Modi }/>
                <Route path='/delete_board' component = { Board_Del }/>

                <Route path='/write_survey' component = { Survey_Write }/>
                <Route path='/list_survey' component = { Survey_List }/>
                <Route path='/read_survey' component = { Survey_Read }/>
            </Provider>
        </Switch>
    </Router>
</>)

export default App;
