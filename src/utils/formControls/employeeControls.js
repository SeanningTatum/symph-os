import { Input, Select } from 'utils/formControls/formModel';

const options = ['Full Time', 'Part Time']

export const employeeControls = {
  fname: new Input('input', 'First Name*', {required: true}),
  lname: new Input('input', 'Last Name*', {required: true}),
  mi: new Input('input', 'Middle Initial*', {required: true}),
  nickname: new Input('input', 'Nickname', {required: false}, true),
  email: new Input('input', 'Email*', {required: true, isEmail: true}, false, 'email'),
  position: new Input('input', 'Position*', {required: true}),
  work_arrangement: new Select('select', 'Work Arrangement*', {required: true}, options)
}

export const employeeUpdateControls = {
  fname: new Input('input', 'First Name*', {required: true}),
  lname: new Input('input', 'Last Name*', {required: true}),
  mi: new Input('input', 'Middle Initial*', {required: true}),
  nickname: new Input('input', 'Nickname', {required: false}, true),
  email: new Input('input', 'Email*', {required: true, isEmail: true}, false, 'email'),
  position: new Input('input', 'Position*', {required: true}),
  work_arrangement: new Select('select', 'Work Arrangement*', {required: true}, options),
  address: new Input('input', 'Address', {required: false}, true),  
  birthday: new Input('input', 'Birthday', {required: false}, true), 
  manager_or_value_delivery: new Input('input', "Manager or Value Delivery"),
  blood_type: new Input('input', 'Blood Type', {required: false}, true),  
  emergency_contact: new Input('input', 'Emergency Contact', {required: false}, true),  
  pagibig: new Input('input', 'Pag Ibig', {required: false}, true),  
  payroll_account: new Input('input', 'Payroll Account', {required: false}, true),  
  philhealth: new Input('input', 'Philhealth', {required: false}, true),  
  sss: new Input('input', 'SSS', {required: false}, true),  
  work_started: new Input('input', 'Work Started', {required: false}, true),  
  work_end: new Input('input', 'Work End', {required: false}, true),
  status: new Input('input', 'Status', {required: false}, true),
  team: new Input('input', 'Team', {required: false}, true)
}