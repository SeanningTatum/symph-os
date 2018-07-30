import React, { Component } from 'react'
import AddButton from 'components/TablePage/AddButton/AddButton';

// Utils
import { projectColumns } from 'utils/tableHeaders';
import BootstrapTable from 'react-bootstrap-table-next';


class Projects extends Component {
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
        <AddButton entity="project"/>
        <div style={{width: '100%', height: '100%', display: 'flex'}}>
          <BootstrapTable
            keyField="id"
            columns={projectColumns}
            data={[]} />
        </div>
      </React.Fragment>
    )
  }
}

/*- - - - - - - - - - - - - - - -
*             Redux             *
* - - - - - - - - - - - - - - - */

export default Projects;
