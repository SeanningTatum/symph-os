import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';

export class Contacts extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <Link to="/contact/add-contact">
            <button className="btn">
              <i className="material-icons">person_add</i>
              Add Contact
            </button>
          </Link>
        </div>
        <BootstrapTable 
          keyField="contact_id"
          data={this.props.contacts}
          columns={contactColumns}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  // getContacts: () => dispatch(clientActions.getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
