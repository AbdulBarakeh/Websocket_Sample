import React from 'react';
import {Link} from 'react-router-dom'
export default class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/viewOne">View One</Link>
          </li>
          <li>
            <Link to="/ViewTwo">View Two</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
