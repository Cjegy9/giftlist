import React, {Component} from 'react';
import { Link } from 'react-router';

import Header from '../components/layouts/header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Home;