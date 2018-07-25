import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  render() {

    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        alert(`${Object.values(row)}`);
      }
    }

    const content = !this.props.loading ? (
      <React.Fragment>
          <div className="button-area">
            <Link to="/contacts/add-contact">
              <button className="btn">
                <i className="material-icons">person_add</i>
                Add Contact
              </button>
            </Link>
          </div>
          <BootstrapTable 
            keyField="key"
            data={this.props.contacts}
            columns={contactColumns}
            rowEvents={rowEvents}/>
      </React.Fragment>
    ) : (
      <div>IM LOADING</div>
    )

    return content;
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
