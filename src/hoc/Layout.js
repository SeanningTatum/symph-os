import React, { Component } from 'react';
import Navbar from 'components/Navigation/Navbar/Navbar';

export default class extends Component {



  render() {
    return(
      <React.Fragment>
        <Navbar />
        {this.props.children}
      </React.Fragment>
    );
  }
}