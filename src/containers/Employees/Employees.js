import React, { Component } from 'react'
import AddButton from 'components/TablePage/AddButton/AddButton';
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

// Utils
import { employeeColumns } from 'utils/tableHeaders';
import BootstrapTable from 'react-bootstrap-table-next';

export class Employee extends Component {

  componentDidMount() {
    this.props.getAll('employees', 'employees-api');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/employees/${row.key}`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddButton entity='employee'/>
        {!this.props.loading ? (
          <BootstrapTable 
            keyField="key"
            columns={employeeColumns}
            rowEvents={this.rowEvents}
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
  getAll: (tableName, apiName) => dispatch(tableActions.getAll(tableName, apiName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
