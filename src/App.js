import React, { Component } from 'react';
import Navbar from 'components/Navigation/Navbar/Navbar';
import ClientsPage from 'containers/Clients/Clients';

import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route component={ClientsPage} path='' exact/>
        </Switch>
      </div>
    );
  }
}

export default App;
