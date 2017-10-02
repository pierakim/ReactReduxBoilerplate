import React from 'react';
import {Link} from 'react-router-dom'; //import Link component from react router here

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1> PluralSight Administration</h1>
        <p> React, React Router and Flux for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
