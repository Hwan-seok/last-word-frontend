import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Home,
  Login,
  Signin,
  MyPage,
  Rooms,
  InsideRoom,
  MakeRoom,
} from '../pages';

const Routes = ({isLoggedIn}) => (
  <Switch>
    <Route exact path="/" component={isLoggedIn ? Home : Rooms}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/sign" component={Signin}></Route>
    <Route path="/rooms/page/:page" component={Rooms}></Route>
    <Route path="/room/:roomNum" component={InsideRoom}></Route>
    <Route path="/makeRoom" component={MakeRoom}></Route>
    <Route path="/myPage" component={MyPage}></Route>
  </Switch>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.account.isLoggedIn,
});

export default connect(mapStateToProps)(Routes);
