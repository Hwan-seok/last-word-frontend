import React from 'react';
import Room from './Room';
import axios from 'axios';

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
    fetch(
        `/api/room/page/${page}?startedFilter=${startedFilter}&privateFilter=${privateFilter}`
    )
        .then((res) => res.json())
        .then((body) => {
          const willSetState = {
            ...this.state,
            ...body,
          };
          if (handling === 'STARTED_FILTER_HANDLING') {
            willSetState['startedFilter'] = selected;
          } else if (handling === 'PRIVATE_FILTER_HANDLING') {
            willSetState['privateFilter'] = selected;
          }
          this.setState({...this.setState, ...willSetState});
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
                  ></Room>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Rooms;
