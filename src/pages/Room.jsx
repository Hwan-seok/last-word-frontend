import React from 'react';
import {Link} from 'react-router-dom';

class Room extends React.Component {
  render() {
    const {roomNum, name, maxUsers, isPrivate, isStarted} = this.props;
    return (
      <tr>
        <td>{roomNum}</td>
        <td>{name}</td>
        <td>{maxUsers}</td>
        <td>{isPrivate === true ? '비공개' : '공개'}</td>
        <td>{isStarted === true ? '게임중' : '대기중'}</td>
        <td>
          <Link to={`/room/${roomNum}`}>
            <button>입장</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default Room;
