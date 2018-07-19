import React, { Component } from 'react';
import ClientsPage from 'containers/Clients/Clients';
import Layout from 'hoc/Layout';

import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route component={ClientsPage} path='' exact/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
