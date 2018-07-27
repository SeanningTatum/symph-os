import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Redux
import * as authActions from 'store/actions/auth';
import { connect } from 'react-redux';

// HOC
import Layout from 'hoc/Layout/Layout';

/*=============================================
=                 Containers                 =
=============================================*/
// Auth
import AuthPage from 'containers/Auth/Auth';

// Projects
import ProjectsPage from 'containers/Projects/Projects';

// Contacts
import ContactsPage from 'containers/Contacts/Contacts';
import AddContactPage from 'containers/Contacts/AddContact/AddContact';
import ContactProfile from 'containers/Contacts/ContactProfile/ContactProfile';

// Clients
import ClientsPage from 'containers/Clients/Clients';
import AddClientPage from 'containers/Clients/AddClient/AddClient';
import ClientProfilePage from 'containers/Clients/ClientProfile/ClientProfile';

// Employees
import EmployeesPage from 'containers/Employees/Employees';
import AddEmployeesPage from 'containers/Employees/AddEmployee/AddEmployee';
import EmployeeProfilePage from 'containers/Employees/EmployeeProfile/EmployeeProfile';

import TeamsPage from 'containers/Teams/Teams';
/*=====  End of containers  ======*/



class App extends Component {

  componentDidMount() {
    this.props.autoSignup();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated ? (
          <Layout>
            <Switch>
              <Route path='/contacts/add-contact' component={AddContactPage} exact />
              <Route path='/contacts/:id' component={ContactProfile} />
              <Route path='/contacts' component={ContactsPage} exact />

              <Route path='/projects' component={ProjectsPage} exact />

              <Route path='/clients/add-client' component={AddClientPage} exact />
              <Route path='/clients/:id' component={ClientProfilePage} />
              <Route path='/clients' component={ClientsPage} exact />

              <Route path='/employees/add-employee' component={AddEmployeesPage} exact/>
              <Route path='/comployees/:id' component={EmployeeProfilePage} />
              <Route path='/employees' component={EmployeesPage} exact />

              <Route path='/teams' component={TeamsPage} exact />
              <Redirect to='/contacts' />
            </Switch>
          </Layout>
        ) : (
            <Switch>
              <Route path='/' component={AuthPage} exact />
              <Redirect to='/' />
            </Switch>
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  autoSignup: () => dispatch(authActions.isLoggedIn())
});

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(App));
