import React from 'react';
import {connect} from 'react-redux';
import {authActionCreators} from '../../store/auth/auth.action';

class Login extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id, password} = e.target;
    const formData = {id: id.value, password: password.value};
    this.props.login(formData);
    // TODO: form data 따로 빼서 e.target로 분리 안해도 바로 필요한 object 반환되게하여
    // , onsubmit에서 바로 login 호출 되도록
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          ID : <input type="text" name="id"></input>
          Password : <input type="password" name="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (formData) => dispatch(authActionCreators.login(formData)),
  logout: () => dispatch(authActionCreators.logout()),
});
export default connect(
    undefined,
    mapDispatchToProps,
)(Login);
