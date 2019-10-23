import React from 'react';
import {Link} from 'react-router-dom';
const AppHeader = () => {
  return (
    <div>
      <Link to="/">집</Link>
      <Link to="/login">로그인</Link>
      <Link to="/login">로그아웃</Link>
      <Link to="/rooms">방목록</Link>
    </div>
  );
};

export default AppHeader;
