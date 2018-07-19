import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';

class Layout extends Component {

  state = {
    sideNavOpen: false,
    pagename: ''
  }

  componentDidMount() {
    this.fetchLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname ) {
      this.fetchLocation();
    }
  }

  // Get location and format
  fetchLocation = () => {
    let location = this.props.location.pathname.slice(1);
    const pagename = location.charAt(0).toUpperCase() + location.substr(1);
    this.setState({pagename});
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
              <h2 className="mb-5">{this.state.pagename}</h2>
              {this.props.children}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Layout);