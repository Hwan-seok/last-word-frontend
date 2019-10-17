import React from 'react';
import io from 'socket.io-client';
import StartButton from './StartButton';
import ReadyButton from './ReadyButton';
import ChatBox from './ChatBox';
import axios from 'axios';

class InsideRoom extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:4000/line', {
      query: {
        roomNum: this.props.match.params.roomNum,
        token: localStorage.getItem('access'),
      },
    });
    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('serverSentMessage', (data) => {
      console.log('adata', data);
      this.setState({
        ...this.state,
        chats: this.state.chats.concat(data.contents),
      });
    });

    this.socket.on('joinUser', (data) => {
      console.log('join!!');
      console.log(data);
    });

    this.socket.on('startGame', (data) => {
      console.log('start');
      this.setState({
        ...this.state,
        isStarted: true,
      });
      // TODO: 채팅창 풀기
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });
  }
  state = {
    chats: ['1번말', '2번말', '3번말', '4번말', '5번말'],
    users: null,
    owner: '',
    currentText: '',
    isStarted: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState);
    return true;
  }

  componentDidMount() {
    axios
        .get(`/api/room/${this.props.match.params.roomNum}`)
        .then((body) => {
          this.setState({
            ...this.state,
            users: body.users,
            owner: body.owner,
          });
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.stausCode === 401) {
            this.props.history.goBack(1);
          }
        });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const contents = e.target.text.value;
    this.setState({
      ...this.state,
      chats: this.state.chats.concat(contents),
      currentText: '',
    });
    this.socket.emit('userSentMessage', {
      roomNum: this.props.match.params.roomNum,
      user: {
        id: 'me',
      },
      contents,
      date: new Date(),
    });
  };

  handleTextChange = (e) => {
    this.setState({
      ...this.state,
      currentText: e.target.value,
    });
  };

  render() {
    let startOrReadyButton = null;
    // eslint-disable-next-line no-constant-condition
    if (true) {
      startOrReadyButton = <StartButton></StartButton>;
    } else {
      startOrReadyButton = <ReadyButton></ReadyButton>;
    }
    return (
      <div>
        <div>
          <ChatBox chats={this.state.chats}></ChatBox>
        </div>
        <div>users</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            이을 말 :
            <input
              type="text"
              value={this.state.currentText}
              onChange={this.handleTextChange}
              name="text"
              autoFocus
            ></input>
            <input type="submit" value="보내기"></input>
          </form>
        </div>
        {startOrReadyButton}
      </div>
    );
  }
}

export default InsideRoom;
