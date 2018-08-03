import React, { Component } from 'react'
import AddButton from 'components/TablePage/AddButton/AddButton';
import Loading from 'components/UI/Loading/Loading';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

// Utils
import { employeeColumns } from 'utils/tableHeaders';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

export class Employee extends Component {

  componentDidMount() {
    this.props.getAll('employees', 'employeesapi');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/employees/${row.key}/general-info`)
    }
  }

  render() {

    const table = !this.props.loading ? (
      <BootstrapTable 
        keyField="key"
        columns={employeeColumns}
        rowEvents={this.rowEvents}
        data={this.props.employees} 
        filter={filterFactory()}
        noDataIndication="There are no employees &#x1F615;"
        pagination={ paginationFactory() }

        />
    ) : (
      <Loading />
    )

    return (
      <React.Fragment>
        <AddButton entity='employee'/>
        {table}
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
