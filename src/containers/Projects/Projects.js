import React, { Component } from 'react';
import AddButton from 'components/TablePage/AddButton/AddButton';
import Loading from 'components/UI/Loading/Loading';

// Utils
import BootstrapTable from 'react-bootstrap-table-next';
import { projectColumns } from 'utils/tableHeaders'; 
import filterFactory from 'react-bootstrap-table2-filter';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

export class Projects extends Component {

  componentDidMount() {
    this.props.getAll('projects', 'projectsapi');
  }

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push(`/projects/${row.key}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddButton entity='project' />
        {!this.props.loading ? (
          <BootstrapTable
            keyField='key'
            data={this.props.projects}
            columns={projectColumns}
            rowEvents={this.rowEvents}
            filter={filterFactory()}
            />
          ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.table.projects,
    loading: state.table.loading
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: (tableName, apiName) => dispatch(tableActions.getAll(tableName, apiName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
