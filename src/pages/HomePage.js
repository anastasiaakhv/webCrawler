import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Web Crawler Application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/site-management">Site Management</Link>
          </li>
          <li>
            <Link to="/execution-management">Execution Management</Link>
          </li>
          <li>
            <Link to="/visualization">Visualization</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
