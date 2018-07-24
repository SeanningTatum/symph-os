import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Clients.scss';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { clientColumns } from 'utils/tableHeaders';

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

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <Link to="/clients/add-client">
            <button className="btn">
              <i className="material-icons">person_add</i>
              Add Client
            </button>
          </Link>
        </div>
        <BootstrapTable 
          keyField='id' 
          data={ this.props.clients } 
          columns={clientColumns} />
      </React.Fragment>
    )
  }
}

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
const mapStateToProps = state => {
  return {
    clients: state.table.clients
  }
}

const mapDispatchToProps = dispatch => ({
  getClients: () => dispatch(clientActions.getClients())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
