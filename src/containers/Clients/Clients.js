import React, { Component } from 'react';
import './Clients.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';
import { contactColumns } from 'utils/tableHeaders';
import * as contactActions from 'store/actions/contacts';

export class Clients extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentWillMount() {
    this.props.getContacts();
  }

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
            Add Client
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

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactActions.getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
