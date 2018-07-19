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

    const marginLeft = (this.state.sideNavOpen) ? '250px' : 0;

    return(
      <React.Fragment>
        <Sidenav open={this.state.sideNavOpen}/>
        <div className="app-container" style={{marginLeft}}>
          <div className="row">
            <div className="col-12">
              <Navbar />
            </div>
          </div>
          
          <div className="row" style={{height: '100%'}}>
            <div className="col-md-10">
              {this.props.children}
              <button className="btn btn-primary" onClick={this.openSidenav}>open</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}