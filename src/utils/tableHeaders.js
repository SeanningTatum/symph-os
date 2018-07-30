/**
 * This file is for the table headers for <BootstrapTable />
 */


// Clients
export const clientColumns = [{
  dataField: 'id',
  text: 'Client ID',
  sort: true
}, {
  dataField: 'client_name',
  text: 'Name',
  sort: true
}, {
  dataField: 'legal_name',
  text: 'Legal Name'
}, {
  dataField: 'type',
  text: 'Type'
}];

// Contacts
export const contactColumns = [{
  dataField: 'key',
  text: 'Contact ID'
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'nickname',
  text: 'Nickname',
  sort: true
}, {
  dataField: 'number',
  text: 'Contact Number'
}, {
  dataField: 'email',
  text: 'Email'
}, {
  dataField: 'company',
  text: 'Company'
}, {
  dataField: 'position',
  text: 'Position'
}];

// Employees
export const employeeColumns = [{
  dataField: 'employee_id',
  text: 'Employee ID'
}, {
  dataField: 'fname',
  text: 'First Name'
}, {
  dataField: 'lname',
  text: 'Last Name'
}, {
  dataField: 'mi',
  text: 'Middle Initial'
}, {
  dataField: 'nickname',
  text: 'Nickname'
}, {
  dataField: 'email',
  text: 'Email'
},{
  dataField: 'position',
  text: 'Position'
}, {
  dataField: 'working_arrangement',
  text: 'Working Arrangement'
}, {
  dataField: 'work_started',
  text: 'Started Working'
}, {
  dataField: 'last_day',
  text: 'Last day'
},];

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
  dataField: 'email',
  text: 'Email Address'
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