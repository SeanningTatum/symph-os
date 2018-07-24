import React, { Component } from 'react'

// Utils
import { employeeColumns } from 'utils/tableHeaders';
import BootstrapTable from 'react-bootstrap-table-next';

export class Employee extends Component {
  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
  render() {
    return (
      <React.Fragment>
        <BootstrapTable 
          keyField="id"
          columns={employeeColumns}
          data={[]}
        />
      </React.Fragment>
    )
  }
}

export default Employee;
