import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

// HOC
import Layout from 'hoc/Layout';

// Containers
import ClientsPage from 'containers/Clients/Clients';
import ProjectsPage from 'containers/Projects/Projects';
import ContactsPage from 'containers/Contacts/Contacts';
import SymphersPage from 'containers/Symphers/Symphers';
import TeamsPage from 'containers/Teams/Teams';

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route component={ClientsPage} path='/clients'/>
          <Route component={ProjectsPage} path='/projects'/>
          <Route component={ContactsPage} path='/contacts'/>
          <Route component={SymphersPage} path='/symphers'/>
          <Route component={TeamsPage} path='/teams'/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
