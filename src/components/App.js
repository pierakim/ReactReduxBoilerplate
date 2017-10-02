import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends React.Component{
  render(){
    return(
        <div className="container-fluid">
           <Header/>
            {this.props.children} {/*passing children that will receive props*/}
        </div>
    );
  }
}

// proptype validation
// we expect to receive children
App.propTypes = {
  children:PropTypes.array.isRequired
};

export default App;
