import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';
import { contactColumns } from 'utils/tableHeaders';

export class Contacts extends Component {

  gotoAddContact = () => {
    this.props.history.push('/contacts/add-contact');
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-content__button-area">
          <button className="btn" onClick={this.gotoAddContact}>
            <i className="material-icons">person_add</i>
            Add Contact
          </button>
        </div>
        <BootstrapTable 
          keyField='client_id' 
          data={ this.props.contacts } 
          columns={contactColumns} 
          bordered={ false }
          condensed />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(Contacts);
