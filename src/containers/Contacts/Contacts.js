import React, { Component } from 'react';
import Loading from 'components/UI/Loading/Loading';
import AddButton from 'components/TablePage/AddButton/AddButton';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';
import filterFactory from 'react-bootstrap-table2-filter';

export class Contacts extends Component {

  componentDidMount() {
    this.props.getAll('contacts', 'contactsapi');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/contacts/${row.key}`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddButton entity='contact' />
        {!this.props.loading ? (
          <BootstrapTable
          keyField="key"
          data={this.props.contacts}
          columns={contactColumns}
          rowEvents={this.rowEvents} 
          filter={filterFactory()}
          noDataIndication="There are no contacts &#x1F615;"
          pagination={paginationFactory()}
          />
          ): (
            <Loading />
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.table.contacts,
    loading: state.table.loading
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: (tableName, api) => dispatch(tableActions.getAll(tableName, api))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
