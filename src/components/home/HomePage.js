import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Hello</h1>
        <p>Wanna some ultra responsive website?</p>
        <p>React, React Router, Redux...</p>
        <Link to="about" className="btn btn-primary btn-lg">More</Link>
      </div>
    );
  }
}

export default HomePage;
