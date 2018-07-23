import React, { Component } from 'react';
import './Clients.scss';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';

// Redux
import { connect } from 'react-redux';
import * as clientActions from 'store/actions/clients';

export class Clients extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentWillMount() {
    this.props.getClients();
  }

  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */
  gotoAddClient = () => {
    this.props.history.push('/clients/add-client');
  }


  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <button className="btn" onClick={this.gotoAddClient}>
            <i className="material-icons">person_add</i>
            Add Client
          </button>
        </div>
        <BootstrapTable 
          keyField='client_id' 
          data={ this.props.clients } 
          columns={contactColumns} 
          bordered={ false }
          condensed />
      </React.Fragment>
    )
  }
}

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
const mapStateToProps = state => {
  return {
    clients: state.clients
  }
}

const mapDispatchToProps = dispatch => ({
  getClients: () => dispatch(clientActions.getClients())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
