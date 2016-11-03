import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Input } from 'semantic-ui-react';

export default function Layout(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" >Product App</Link>
          </div>
          <Input size="large" icon="search" placeholder="Search..." className="searchBar" />
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/add">New Product</Link></li>
            <li><Link to="/modify">Modify Products</Link></li>
          </ul>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

Layout.PropTypes = {
  clildren: PropTypes.object, //eslint-disable-line
};
