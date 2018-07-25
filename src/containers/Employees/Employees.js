import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Loading from 'components/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

// Utils
import { employeeColumns } from 'utils/tableHeaders';
import BootstrapTable from 'react-bootstrap-table-next';

export class Employee extends Component {

  componentDidMount() {
    this.props.get('employees', 'employees-api');
  }

  render() {
    return (
      <React.Fragment>
        <div className="button-area">
          <Link to="/employees/add-employee">
            <button className="btn">
              <i className="material-icons">person_add</i>
              Add Employee
            </button>
          </Link>
        </div>
        {!this.props.loading ? (
          <BootstrapTable 
            keyField="id"
            columns={employeeColumns}
            data={this.props.employees}
          />) : (
            <Loading />
          )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.table.employees,
  loading: state.table.loading
});

const mapDispatchToProps = dispatch => ({
  get: (tableName, apiName) => dispatch(tableActions.get(tableName, apiName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
