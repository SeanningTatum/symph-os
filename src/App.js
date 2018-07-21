import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

// HOC
import Layout from 'hoc/Layout/Layout';

// Containers
import ClientsPage from 'containers/Clients/Clients';
import ProjectsPage from 'containers/Projects/Projects';
import ContactsPage from 'containers/Contacts/Contacts';
import AddContactPage from 'containers/Contacts/AddContact/AddContact';
import SymphersPage from 'containers/Symphers/Symphers';
import TeamsPage from 'containers/Teams/Teams';

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route component={ClientsPage} path='/clients'/>
          <Route component={ProjectsPage} path='/projects'/>
          <Route component={AddContactPage} exact path='/contacts/add-contact'/>
          <Route component={ContactsPage} exact path='/contacts'/>
          <Route component={SymphersPage} path='/symphers'/>
          <Route component={TeamsPage} path='/teams'/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
