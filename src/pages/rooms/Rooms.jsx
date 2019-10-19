import React from 'react';
import Room from '../Room';
import axios from 'axios';
import MakeRoom from '../createRoom/MakeRoom';
import {Link} from 'react-router-dom';

class Rooms extends React.Component {
  state = {
    rooms: null,
    privateFilter: 'all',
    startedFilter: 'all',
    pages: 1,
  };

  /*  async shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState);
    console.log(this.state.startedFilter !== nextState.startedFilter);
    if (
      this.state.privateFilter !== nextState.privateFilter ||
      this.state.startedFilter !== nextState.startedFilter ||
      this.state.rooms === null
    ) {
      return true;
    } else {
      return false;
    }
  }
*/
  componentDidMount() {
    axios
        .get('/api/auth/jwt', {
          headers: {Authorization: `Bearer ${localStorage.getItem('access')}`},
        })
        .then((res) => {
          this.fetchRooms();
        });
  }

  fetchRooms = (selected, handling) => {
    const page = this.props.match.params.page;
    const startedFilter = this.state.startedFilter;
    const privateFilter = this.state.privateFilter;
    axios
        .get(
            `/api/room/page/${page}?startedFilter=${startedFilter}&privateFilter=${privateFilter}`
        )
        .then((res) => {
          const willSetState = {
            ...this.state,
            ...res.data,
          };
          if (handling === 'STARTED_FILTER_HANDLING') {
            willSetState['startedFilter'] = selected;
          } else if (handling === 'PRIVATE_FILTER_HANDLING') {
            willSetState['privateFilter'] = selected;
          }
          this.setState((state, props) => ({...state, ...willSetState}));
        });
  };

  handleStartedFilter = (e) => {
    const startedFilterHandling = 'STARTED_FILTER_HANDLING';
    const selected = e.target.value;

    this.fetchRooms(selected, startedFilterHandling);
  };

  handlePrivateFilter = (e) => {
    const privateFilterHandling = 'PRIVATE_FILTER_HANDLING';
    const selected = e.target.value;
    this.fetchRooms(selected, privateFilterHandling);
  };

  handleRoomClick = (e) => {
    const q = e.target;
    console.log(q);
    const uri = `${this.props.match.url}`;
    this.props.history.push(uri);
  };

  goIntoRoom = (roomNum) => {
    this.props.history.push(`/room/${roomNum}`);
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>정원</th>
              <th>
                <select
                  value={this.state.privateFilter}
                  onChange={this.handlePrivateFilter}
                >
                  <option value="all">모두</option>
                  <option value="nonPrivate">공개방</option>
                  <option value="private">비공개방</option>
                </select>
              </th>
              <th>
                <select
                  value={this.state.startedFilter}
                  onChange={this.handleStartedFilter}
                >
                  <option value="all">모두</option>
                  <option value="nonStared">대기중</option>
                  <option value="started">게임중</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.rooms &&
              this.state.rooms.map((room) => {
                return (
                  <Room
                    key={room.name}
                    {...room}
                    onClick={this.handleRoomClick}
                    goIntoRoom={this.goIntoRoom}
                  ></Room>
                );
              })}
          </tbody>
        </table>
        <Link to="/makeRoom">
          <button>방 만들기</button>
        </Link>
      </div>
    );
  }
}

export default Rooms;
