import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// HOC
import Layout from 'hoc/Layout/Layout';

/*=============================================
=                 Containers                 =
=============================================*/
// Projects
import ProjectsPage from 'containers/Projects/Projects';

// Contacts
import ContactsPage from 'containers/Contacts/Contacts';
import AddContactPage from 'containers/Contacts/AddContact/AddContact';

// Clients
import ClientsPage from 'containers/Clients/Clients';
import AddClientPage from 'containers/Clients/AddClient/AddClient';
import ClientProfilePage from 'containers/Clients/ClientProfile/ClientProfile';

// Employees
import EmployeesPage from 'containers/Employees/Employees';
import AddEmployeesPage from 'containers/Employees/AddEmployee/AddEmployee';

import TeamsPage from 'containers/Teams/Teams';
/*=====  End of containers  ======*/

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
            <Route path='/contacts' component={ContactsPage} exact />
            <Route path='/contacts/add-contact' component={AddContactPage} />

            <Route path='/projects' component={ProjectsPage} exact />

            <Route path='/clients/add-client' component={AddClientPage} exact />
            <Route path='/clients/:id' component={ClientProfilePage} />          
            <Route path='/clients' component={ClientsPage} exact />

            <Route path='/employees/add-employee' component={AddEmployeesPage} />
            <Route path='/employees' component={EmployeesPage} exact />

            <Route path='/teams' component={TeamsPage} exact />
        
        </Switch>
      </Layout>
    );
  }
}

export default App;
