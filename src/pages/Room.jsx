import React from 'react';
import axios from 'axios';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.passValue = React.createRef();
  }
  state = {
    readyToInputPassword: false,
  };

  handleReadyPasswordInput = (e) => {
    if (
      this.props.isPrivate === true &&
      this.state.readyToInputPassword === false
    ) {
      this.setState((state) => ({
        readyToInputPassword: true,
      }));
    } else if (
      this.props.isPrivate === true &&
      this.state.readyToInputPassword === true
    ) {
      const roomNum = this.props.roomNum;
      const password = this.passValue.current.value;
      axios
          .post(`/api/room/verifyPassword`, {
            roomNum,
            password,
          })
          .then((res) => {
            this.props.goIntoRoom(this.props.roomNum);
          })
          .catch((err) => {
            if (err.response.data.statusCode === 401) {
              alert('잘못된 비밀번호입니다.');
              this.passValue.current.value = '';
            }
          });
    } else {
      this.props.goIntoRoom(this.props.roomNum);
    }
  };

  render() {
    const {roomNum, name, maxUsers, isPrivate, isStarted} = this.props;
    return (
      <tr>
        <td>{roomNum}</td>
        <td>{name}</td>
        <td>{maxUsers}</td>
        <td>{isPrivate === true ? '비공개' : '공개'}</td>
        <td>{isStarted === true ? '게임중' : '대기중'}</td>

        {this.state.readyToInputPassword && (
          <td>
            <div>
              password:
              <input type="password" ref={this.passValue}></input>
            </div>
          </td>
        )}
        <td>
          <button onClick={this.handleReadyPasswordInput}>입장</button>
        </td>
      </tr>
    );
  }
}

export default Room;
