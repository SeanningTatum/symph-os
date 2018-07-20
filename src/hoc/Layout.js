import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Navigation Components
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';
import ToggleButton from 'components/Navigation/Sidenav/ToggleButton/ToggleButton';

class Layout extends Component {

  state = {
    sideNavOpen: true,
    pageName: '',
    pageStepper: '',
    showPageStepper: false
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
    let pageStepper = '';
    let showPageStepper = false;

    const location = this.props.location.pathname.slice(1);
    const pagenames = location.replace('-', ' ').split('/');
    const last = pagenames.length - 1;
    const pageName = pagenames[last].charAt(0).toUpperCase() + pagenames[last].substr(1);

    for (const x in pagenames) {
      // Capitalize and combine paths (if there is)
      pageStepper += pagenames[x].charAt(0).toUpperCase() + pagenames[x].substr(1);
      if (x < last) {
        pageStepper += ' / ';
        showPageStepper = true;
      }
    }

    this.setState({pageStepper, pageName, showPageStepper});
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

    const marginTop = (this.state.showPageStepper) ? 0 : '3rem';

    return(
      <div className="app--container">

        <Navbar/>
        <Sidenav open={this.state.sideNavOpen}/>  

        {/* Main content */}
        <div className="main-content--container" style={{marginLeft}}>
          <ToggleButton isOpen={this.state.sideNavOpen} openSidenav={this.openSidenav} left={left} />
          {this.state.showPageStepper && <h5 className="main-content--stepper">{this.state.pageStepper}</h5>}
          <h2 className="main-content--title" style={{marginTop}}>{this.state.pageName}</h2>
          {this.props.children}
        </div>
        {/* End Main content */}
        
      </div>
    );
  }
}

export default withRouter(Layout);