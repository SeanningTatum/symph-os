import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Clients.scss';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { clientColumns } from 'utils/tableHeaders';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    this.props.history.push(`/clients/${row['id']}`);
  }
}

export class Clients extends Component {

  componentDidMount() {
    this.props.get('clients', 'clients-api');
  }

  render() {

    const content = !this.props.loading ? (
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
          columns={clientColumns} 
          rowEvents={rowEvents}
          />
      </React.Fragment>
    ) : (
      <div>IM LOADING</div>
    );


    return content;
  }
}

const mapStateToProps = state => {
  return {
    clients: state.table.clients,
    loading: state.table.loading
  }
}

const mapDispatchToProps = dispatch => ({
  get: (tableName, apiName) => dispatch(tableActions.get(tableName, apiName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
