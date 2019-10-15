import React from 'react';
import axios from 'axios';

class MyPage extends React.Component {
  state = {
    id: null,
    email: null,
    userName: null,
  };

  componentDidMount() {
    axios
        .get('/api/user/myPage', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        })
        .then((res) => {
          const {id, email, userName} = res.data;
          this.setState({
            id,
            email,
            userName,
          });
        })
        .catch((err) => console.log(err));
  }
  render() {
    return <div>{this.state.id && `${this.state.id$}`}</div>;
  }
}

export default MyPage;
