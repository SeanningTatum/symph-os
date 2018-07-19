import React, { Component } from 'react';
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';

export default class extends Component {

  state = {
    sideNavOpen: false
  }

  openSidenav = () => {
    this.setState(prevState => ({sideNavOpen: !prevState.sideNavOpen}))
  }

  render() {

    const marginLeft = (this.state.sideNavOpen) ? '200px' : '-15px';

    return(
      <div className="app-container" >

        {/* Navbar */}
        <div className="row">
          <div className="col-12">
            <Navbar clicked={this.openSidenav}/>
          </div>
        </div>

        <Sidenav open={this.state.sideNavOpen}/>  

        {/* Main content */}
        <div className="row main-content" style={{height: '100%', marginLeft}}>
          <div className="col-12">
            <div className="container-fluid mt-5">
              {this.props.children}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}