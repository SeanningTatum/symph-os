import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

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
          data={this.props.employees}
        />
      </React.Fragment>
    )
  }
}

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */
const mapStateToProps = state => ({
  employees: state.employee.employees
});

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
