import React from 'react';
import axios from 'axios';

class MakeRoom extends React.Component {
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
  render() {
    return (
      <div>
        <form>
          방 이름 : <input type="text"></input>
          
          비밀번호 : <input type="password"></input>
          설명 : <input type="text"></input>: <input type="text"></input>
          
        </form>
      </div>
    );
  }
}

export default MakeRoom;
