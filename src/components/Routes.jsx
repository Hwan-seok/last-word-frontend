import React from 'react';
import {Route} from 'react-router-dom';
import {
  Home,
  Login,
  Signin,
  MyPage,
  Rooms,
  InsideRoom,
  MakeRoom,
} from '../pages';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/sign" component={Signin}></Route>
    <Route path="/rooms/page/:page" component={Rooms}></Route>
    <Route path="/room/:roomNum" component={InsideRoom}></Route>
    <Route path="/makeRoom" component={MakeRoom}></Route>
    <Route path="/myPage" component={MyPage}></Route>
  </div>
);

export default Routes;
