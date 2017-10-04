/*first stateless functionnal component*/

import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>{
  return(
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
      {" | "}
      <NavLink to="/todos" activeClassName="active">Todos</NavLink>
    </nav>
  );
};

export default Header;
