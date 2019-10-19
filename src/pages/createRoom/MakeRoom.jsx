import React from 'react';
import axios from 'axios';

class CreateRoom extends React.Component {
  componentDidMount() {
    axios
        .get('/api/auth/jwt', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, password, description} = e.target;
    axios
        .post('/api/room', {
          name: name.value,
          password: password.value,
          description: description.value,
          isPrivate: password.value ? true : false,
          maxUsers: 5,
        })
        .then((res) => {
          this.props.history.push('/rooms/page/1');
        });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          방 이름 : <input type="text" name="name"></input>
          <br></br>
          비밀번호 : <input type="password" name="password"></input>
          <br></br>
          설명 : <input type="text" name="description"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default CreateRoom;
