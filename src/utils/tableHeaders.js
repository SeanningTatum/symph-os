/**
 * This file is for the table headers for <BootstrapTable />
 */

import { textFilter } from 'react-bootstrap-table2-filter';

// Clients
export const clientColumns = [ {
  dataField: 'name',
  text: 'Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'legal_name',
  text: 'Legal Name',
  sort: true
}, {
  dataField: 'c_type',
  text: 'Type'
}];

// Contacts
export const contactColumns = [{
  dataField: 'name',
  text: 'Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'nickname',
  text: 'Nickname',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'number',
  text: 'Contact Number'
}, {
  dataField: 'email',
  text: 'Email'
}, {
  dataField: 'company',
  text: 'Company',
  filter: textFilter()
}, {
  dataField: 'position',
  text: 'Position'
}];

// Employees
export const employeeColumns = [ {
  dataField: 'fname',
  text: 'First Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'lname',
  text: 'Last Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'mi',
  text: 'Middle Initial'
}, {
  dataField: 'nickname',
  text: 'Nickname',
  filter: textFilter()
}, {
  dataField: 'email',
  text: 'Email'
},{
  dataField: 'position',
  text: 'Position',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'team',
  text: 'Team',
  sort: true
},{
  dataField: 'work_arrangement',
  text: 'Working Arrangement',
  sort: true
}, {
  dataField: 'status',
  text: 'Active',
  sort: true
},];

// Projects
export const projectColumns = [{
  dataField: 'project_name',
  text: 'Project Name'
}, {
  dataField: 'client',
  text: 'Client'
}, {
  dataField: 'client_contact',
  text: 'Client Contact'
}, {
  dataField: 'project_manager',
  text: 'Project Manager'
}, {
  dataField: 'team',
  text: 'Team',
}, {
  dataField: 'total_no_of_budgeted_blocks',
  text: 'Total # of Budgeted Blocks',
}, {
  dataField: 'total_no_of_consumed_blocks',
  text: 'Total # of consumed blocks'
}, {
  dataField: 'blocks_not_allocated',
  text: 'Blocks not allocated'
}]