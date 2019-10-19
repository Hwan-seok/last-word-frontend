import React from 'react';
import axios from 'axios';
class Login extends React.Component {
  state = null;

  componentDidMount() {
    if (localStorage.getItem('access')) {
      axios
          .get('/api/auth/jwt', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access')}`,
            },
          })
          .then((res) => {
            console.log(res);
            this.props.history.push('/myPage');
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id, password} = e.target;
    axios
        .post('/api/auth/login', {
          id: id.value,
          password: password.value,
        })
        .then((res) => {
          localStorage.setItem('access', res.data.access_token);
          localStorage.setItem('refresh', res.data.refresh_token);
          this.props.history.push('/myPage');
        });
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

export default Login;
