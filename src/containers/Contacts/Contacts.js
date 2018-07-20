import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';

const columns = [{
  dataField: 'client_id',
  text: 'Client ID',
  sort: true
}, {
  dataField: 'client_name',
  text: 'Name',
  sort: true
}, {
  dataField: 'contact_name',
  text: 'Contact Name'
}, {
  dataField: 'legal_name',
  text: 'Legal Name'
}, {
  dataField: 'type',
  text: 'Type'
}];

export class Contacts extends Component {

  gotoAddContact = () => {
    this.props.history.push('/contacts/add-contact');
  }

  componentDidMount() {
    console.log(this.props.contacts)
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
          columns={columns} 
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
