import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
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
  }
}

export default Home;
