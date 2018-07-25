import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Layout.scss';

// Navigation Components
import Navbar from 'components/Navigation/Navbar/Navbar';
import Sidenav from 'components/Navigation/Sidenav/Sidenav';
import ToggleButton from 'components/Navigation/Sidenav/ToggleButton/ToggleButton';

// Routes
const routes = ["contacts", "projects", "clients", "employees", "teams"];

class Layout extends Component {
  
  state = {
    sideNavOpen: true,
    showPageStepper: false,
    pageName: '',
    pageStepper: '',
    showTitles: true,
    rootPage: ''
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentDidMount() {
    this.fetchLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchLocation();
    }
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */


  /**
   * Description.
   * This function retrieves the path from the url
   * and parses and formats it to render the state.title
   * and state.stepper dynamically
   */
  fetchLocation = () => {
    let pageStepper = '';
    let showPageStepper = false;
    let showTitles = true;

    // Get path from URL
    const location = this.props.location.pathname.slice(1);
    // Take away '-' and create an array of url params
    const pagenames = location.replace('-', ' ').split('/');
    const last = pagenames.length - 1;
    // Set the page name to last param in url and capitalize first letter
    const pageName = pagenames[last].charAt(0).toUpperCase() + pagenames[last].substr(1);

    for (const x in pagenames) {
      // Capitalize and combine paths (if there is) to create stepper
      pageStepper += pagenames[x].charAt(0).toUpperCase() + pagenames[x].substr(1);
      if (x < last) {
        pageStepper += ' / ';
        showPageStepper = true;
      }
    }

    // If we're at a profilePage - remove titles
    // We know it's a profile becuse the key is very long
    if (pagenames[last].length > 15 || !isNaN(+pagenames[last])) showTitles = false;

    this.setState({pageStepper, pageName, showPageStepper, showTitles, rootPage: pagenames[0]});
  }

  openSidenav = () => {
    this.setState(prevState => ({sideNavOpen: !prevState.sideNavOpen}))
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  render() {
    let marginLeft, left;

    if (this.state.sideNavOpen) {
      marginLeft = '200px';
      left = '185px';
    } else {
      marginLeft = '60px';
      left = '40px';
    }

    const marginTop = (this.state.showPageStepper) ? 0 : '3rem';
    const display = (this.state.showTitles) ? 'block' : 'none';

    if (routes.find(route => this.state.rootPage === route) === undefined) {
      return <div>NOT FOUND</div>
    } else {
      return(
        <div className="app-container">

          <Navbar/>
          <Sidenav open={this.state.sideNavOpen}/>  

          {/* Main content */}
          <main className="container" style={{marginLeft}}>
            <ToggleButton isOpen={this.state.sideNavOpen} openSidenav={this.openSidenav} left={left} />
            <div className="titles" style={{display}}>
              {this.state.showPageStepper && <h5 className="stepper">{this.state.pageStepper}</h5>}
              <h2 className="title" style={{marginTop}}>{this.state.pageName}</h2>
            </div>
            <div className="content">
              {this.props.children}
            </div>
          </main>
          {/* End Main content */}
          
        </div>
      );
    }


  }
}

export default withRouter(Layout);