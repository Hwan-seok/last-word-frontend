import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Home,
  Login,
  Register,
  Profile,
  Rooms,
  GameRoom,
  CreateRoom,
} from '../pages';

const Routes = ({isLoggedIn}) => (
  <Switch>
    <Route exact path="/" component={isLoggedIn ? Home : Rooms}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/rooms/page/:page" component={Rooms}></Route>
    <Route path="/room/:roomNum" component={GameRoom}></Route>
    <Route path="/createRoom" component={CreateRoom}></Route>
    <Route path="/profile/:id" component={Profile}></Route>
  </Switch>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.account.isLoggedIn,
});

export default connect(mapStateToProps)(Routes);
