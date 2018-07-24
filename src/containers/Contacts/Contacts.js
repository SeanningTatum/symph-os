import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';



export class Contacts extends Component {

  render() {

    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        alert(`${Object.values(row)}`);
      }
    }

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
        <BootstrapTable 
          keyField="id"
          data={this.props.contacts}
          columns={contactColumns}
          rowEvents={rowEvents}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.table.contacts
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
