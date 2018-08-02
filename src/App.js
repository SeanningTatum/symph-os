import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Redux
import * as authActions from 'store/actions/auth';
import { connect } from 'react-redux';

// HOC
import Layout from 'hoc/Layout/Layout';
import asyncComponent from 'hoc/asyncComponent/asyncComponent';
/*=============================================
=                 Containers                 =
=============================================*/

// Projects
const AsyncProjectsPage = asyncComponent(() => import('containers/Projects/Projects'));
const AsyncAddProjectPage = asyncComponent(() => import('containers/Projects/AddProject/AddProject'));
const AsyncProjectsProfilePage = asyncComponent(() => import('containers/Projects/ProjectProfile/ProjectProfile'));

// Auth
const AsyncAuthPage = asyncComponent(() => import('containers/Auth/Auth'));

// Contacts
const AsyncContactsPage = asyncComponent(() => import('containers/Contacts/Contacts'));
const AsyncAddContactPage = asyncComponent(() => import('containers/Contacts/AddContact/AddContact')); 
const AsyncContactProfile = asyncComponent(() => import('containers/Contacts/ContactProfile/ContactProfile')); 

// Clients
const AsyncClientsPage = asyncComponent(() => import('containers/Clients/Clients')); 
const AsyncAddClientPage = asyncComponent(() => import('containers/Clients/AddClient/AddClient')); 
const AsyncClientProfilePage = asyncComponent(() => import('containers/Clients/ClientProfile/ClientProfile')); 

// Employees
const AsyncEmployeesPage = asyncComponent(() => import('containers/Employees/Employees')); 
const AsyncAddEmployeesPage = asyncComponent(() => import('containers/Employees/AddEmployee/AddEmployee')); 
const AsyncEmployeeProfilePage = asyncComponent(() => import('containers/Employees/EmployeeProfile/EmployeeProfile')); 

// Teams
const AsyncTeamsPage = asyncComponent(() => import('containers/Teams/Teams')); 
const AsyncAddTeamPage = asyncComponent(() => import('containers/Teams/AddTeam/AddTeam')); 
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
              <Route path='/contacts/add-contact' component={AsyncAddContactPage} exact />
              <Route path='/contacts/:id' component={AsyncContactProfile} />
              <Route path='/contacts' component={AsyncContactsPage} exact />

              <Route path='/projects/add-project' component={AsyncAddProjectPage} exact />
              <Route path='/projects/:id' component={AsyncProjectsProfilePage} />
              <Route path='/projects' component={AsyncProjectsPage} exact />

              <Route path='/clients/add-client' component={AsyncAddClientPage} exact />
              <Route path='/clients/:id' component={AsyncClientProfilePage} />
              <Route path='/clients' component={AsyncClientsPage} exact />

              <Route path='/employees/add-employee' component={AsyncAddEmployeesPage} exact/>
              <Route path='/employees/:id' component={AsyncEmployeeProfilePage} />
              <Route path='/employees' component={AsyncEmployeesPage} exact />

              <Route path='/teams/add-team' component={AsyncAddTeamPage} exact />
              <Route path='/teams' component={AsyncTeamsPage} exact />

              <Route render={() => <Redirect to='/contacts'/>}/>
            </Switch>
          </Layout>
        ) : (
            <Switch>
              <Route path='/' component={AsyncAuthPage} exact />
              <Route render={() =>  <Redirect to='/' />}/> 
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
