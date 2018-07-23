import React, { Component } from 'react';

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
    this.props.location.push('/contacts/add-contact');
  }
  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *             Redux             *
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
          data={[]}
          columns={contactColumns}
        />
      </React.Fragment>
    )
  }
}

export default Contacts;
