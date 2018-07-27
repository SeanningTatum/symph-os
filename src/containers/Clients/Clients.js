import React, { Component } from 'react';
import AddButton from 'components/TablePage/AddButton/AddButton';
import Loading from 'components/Loading/Loading';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { clientColumns } from 'utils/tableHeaders';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

export class Clients extends Component {

  componentDidMount() {
    this.props.getAll('clients', 'clients-api');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/clients/${row['id']}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddButton entity='client' />
        {!this.props.loading ? (
          <BootstrapTable
            keyField='id'
            data={this.props.clients}
            columns={clientColumns}
            rowEvents={this.rowEvents}/>
          ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.table.clients,
    loading: state.table.loading
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: (tableName, apiName) => dispatch(tableActions.getAll(tableName, apiName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
