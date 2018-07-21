import React, { Component } from 'react';
import './Contacts.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';
import { contactColumns } from 'utils/tableHeaders';
import * as contactActions from 'store/actions/contacts';

export class Contacts extends Component {

  componentWillMount() {
    this.props.getContacts();
  }

  gotoAddContact = () => {
    this.props.history.push('/contacts/add-contact');
  }

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

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactActions.getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
