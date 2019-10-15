import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
  state = {
    fetching: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({...this.state, fetching: true});
    const {id, password, email, userName} = e.target;
    axios
        .post('/api/user', {
          id: id.value,
          password: password.value,
          email: email.value,
          userName: userName.value,
        })
        .then((res) => {
          localStorage.setItem('access', res.data.access_token);
          localStorage.setItem('refresh', res.data.refresh_token);
          this.props.history.push('/myPage');
        })
        .catch((err) => {
          console.log(err);
          const errData = err.response.data;
          console.log(errData);
          if (errData.statusCode === 409) {
            alert('이미 존재하는 id 입니다.');
          } else if (errData.statusCode === 400) {
            alert('email 형식에 맞게 입력해 주세요');
          }
        });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          id <input name="id" type="text" maxLength="10" autoFocus></input>
          <br></br>
          password{' '}
          <input
            name="password"
            title="asdf"
            type="password"
            maxLength="20"
          ></input>
          <br></br>
          email <input name="email" type="text" maxLength="50"></input>
          <br></br>
          user name <input name="userName" type="text" maxLength="50"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Signin;
