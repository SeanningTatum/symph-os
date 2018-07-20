import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Navigation Components
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';

class Layout extends Component {

  state = {
    sideNavOpen: true,
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
    let marginLeft, left, icon;
    if (this.state.sideNavOpen) {
      marginLeft = '200px';
      left = '185px';
      icon = 'keyboard_arrow_left';
    } else {
      marginLeft = '40px';
      left = '40px'
      icon = 'keyboard_arrow_right';
    }

    return(
      <div className="app--container">

        <Navbar/>
        <Sidenav open={this.state.sideNavOpen}/>  

        {/* Main content */}
        <div className="main-content--container" style={{marginLeft}}>
          <div className="btn btn-primary sidenav--btn" style={{left}} onClick={this.openSidenav}>
            <i className="material-icons">{icon}</i>
          </div>
          <h2 className="main-content--title">{this.state.pagename}</h2>
          {this.props.children}
        </div>
        {/* End Main content */}
        
      </div>
    );
  }
}

export default withRouter(Layout);