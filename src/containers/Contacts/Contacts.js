import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';

export class Contacts extends Component {

  componentDidMount() {
    this.props.get('contacts', 'contacts-api');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/contacts/${row.key}`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <Link to="/contacts/add-contact">
            <button className="btn">
              <i className="material-icons">person_add</i>
              Add Contact
              </button>
          </Link>
        </div>
        {!this.props.loading ? (
          <BootstrapTable
          keyField="key"
          data={this.props.contacts}
          columns={contactColumns}
          rowEvents={this.rowEvents} />
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
  get: (tableName, api) => dispatch(tableActions.get(tableName, api))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
