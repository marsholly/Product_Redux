import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export default function Layout(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" >Product App</Link>
          </div>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/add">New Product</Link></li>
            <li><Link to="/">Modify Products</Link></li>
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
