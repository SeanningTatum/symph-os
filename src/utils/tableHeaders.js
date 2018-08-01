/**
 * This file is for the table headers for <BootstrapTable />
 */


// Clients
export const clientColumns = [ {
  dataField: 'name',
  text: 'Name',
  sort: true
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
export const employeeColumns = [ {
  dataField: 'fname',
  text: 'First Name',
  sort: true
}, {
  dataField: 'lname',
  text: 'Last Name',
  sort: true
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
  text: 'Position',
  sort: true
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
  text: 'Active'
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