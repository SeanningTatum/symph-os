import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';


// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { contactColumns } from 'utils/tableHeaders';

export class Contacts extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */
  gotoAddContact = () => {
    this.props.history.push('/contacts/add-contact');
  }
  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */

  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <button className="btn" onClick={this.gotoAddContact}>
            <i className="material-icons">person_add</i>
            Add Contact
          </button>
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

/*- - - - - - - - - - - - - - - -
*             Redux             *
* - - - - - - - - - - - - - - - */

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  // getContacts: () => dispatch(clientActions.getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
