import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Navigation Components
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';
import ToggleButton from 'components/Navigation/Sidenav/ToggleButton/ToggleButton';

class Layout extends Component {

  state = {
    sideNavOpen: true,
    pagename: '',
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
    let pagenames = location.replace('-', ' ').split('/');
    const pagename = pagenames[pagenames.length - 1].charAt(0).toUpperCase() + pagenames[pagenames.length - 1].substr(1);
    this.setState({pagename});
  }

  openSidenav = () => {
    this.setState(prevState => ({sideNavOpen: !prevState.sideNavOpen}))
  }

  render() {
    let marginLeft, left;
    if (this.state.sideNavOpen) {
      marginLeft = '200px';
      left = '185px';
    } else {
      marginLeft = '60px';
      left = '40px'
    }

    return(
      <div className="app--container">

        <Navbar/>
        <Sidenav open={this.state.sideNavOpen}/>  

        {/* Main content */}
        <div className="main-content--container" style={{marginLeft}}>
          <ToggleButton isOpen={this.state.sideNavOpen} openSidenav={this.openSidenav} left={left} />
          <h2 className="main-content--title">{this.state.pagename}</h2>
          {this.props.children}
        </div>
        {/* End Main content */}
        
      </div>
    );
  }
}

export default withRouter(Layout);