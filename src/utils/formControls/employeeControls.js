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
  address: new Input('input', 'Address', {required: false}, true),  
  birthday: new Input('input', 'Birthday', {required: false}, true),  
  blood_type: new Input('input', 'Blood Type', {required: false}, true),  
  emergency_contact: new Input('input', 'Emergency Contact', {required: false}, true),  
  pagibig: new Input('input', 'Pag Ibig', {required: false}, true),  
  payroll_account: new Input('input', 'Payroll Account', {required: false}, true),  
  philhealth: new Input('input', 'Philhealth', {required: false}, true),  
  sss: new Input('input', 'SSS', {required: false}, true),  
  work_arrangement: new Select('select', 'Work Arrangement*', {required: true}, options),
  work_started: new Input('input', 'work_started', {required: false}, true),  
  work_end: new Input('input', 'work_end', {required: false}, true),  
}