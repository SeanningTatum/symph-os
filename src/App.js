import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// HOC
import Layout from 'hoc/Layout/Layout';

// Containers
import ClientsPage from 'containers/Clients/Clients';
import ProjectsPage from 'containers/Projects/Projects';
import ContactsPage from 'containers/Contacts/Contacts';
import AddClientPage from 'containers/Clients/AddClient/AddClient';
import SymphersPage from 'containers/Symphers/Symphers';
import TeamsPage from 'containers/Teams/Teams';

class App extends Component {

  render() {
    return (
      <Switch>
        <Layout>
          <Route component={ContactsPage} exact path='/contacts'/>
          <Route component={ProjectsPage} exact path='/projects'/>
          <Route component={AddClientPage} exact path='/clients/add-client'/>
          <Route component={ClientsPage} exact path='/clients'/>
          <Route component={SymphersPage} exact path='/symphers'/>
          <Route component={TeamsPage} exact path='/teams'/>
          <Redirect to="/contacts" />
        </Layout>
      </Switch>
    );
  }
}

export default App;
