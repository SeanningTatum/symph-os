import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

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
  dataField: 'legal_type',
  text: 'Legal Name'
}, {
  dataField: 'Type',
  text: 'Type'
}];

const data = [
  {  client_id: 1, client_name: 'Symph', contact_name: 'Sean Urgel', legal_type: 'Sean Stuart Urgel', Type: 'Company'},
  {  client_id: 2, client_name: 'Symph', contact_name: 'Bobby Urgel', legal_type: 'Sean Stuart Urgel', Type: 'Company'},
]

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <BootstrapTable 
          keyField='client_id' 
          data={ data } 
          columns={columns} 
          bordered={ false }
          condensed />
      </React.Fragment>
    )
  }
}

export default Contacts;
