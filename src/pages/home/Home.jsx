import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  state = {authorized: false};

  componentDidMount() {
    if (localStorage.getItem('access')) {
      axios
          .get('/api/auth/jwt', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access')}`,
            },
          })
          .then((res) => {
            this.setState({authorized: true});
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }

  handleButtonClick = (e) => {
    this.props.history.push('/rooms/page/1');
  };
  render() {
    if (this.state.authorized === false) {
      return (
        <div>
          <Link to="/login">
            <button>log in</button>
          </Link>
          <Link to="/sign">
            <button>sign in</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleButtonClick}>방 목록</button>
        </div>
      );
    }
  }
}

export default Home;
