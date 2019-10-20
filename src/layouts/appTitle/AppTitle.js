import React from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';

class AppTitle extends React.Component {
  render() {
    const {pathname} = this.props;
    const pathnameMatchTitle = {
      '/login': '로그인',
      '/register': '회원가입',
      '/profile': '프로필',
      '/rooms': '게임 방 목록',
      '/room': '즐거운 끝말 잇기',
    };

    return (
      <Helmet>
        <title>{`${pathname ? pathnameMatchTitle[pathname] : ''}`}</title>
      </Helmet>
    );
  }
}

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
});

export default connect(
    mapStateToProps,
    null
)(AppTitle);
