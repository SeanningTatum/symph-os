import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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

  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <Link to="/employees/add-employee">
            <button className="btn" onClick={this.gotoAddContact}>
              <i className="material-icons">person_add</i>
              Add Employee
            </button>
          </Link>
        </div>
        <BootstrapTable 
          keyField="id"
          columns={employeeColumns}
          data={[]}
        />
      </React.Fragment>
    )
  }
}

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */

export default Employee;
