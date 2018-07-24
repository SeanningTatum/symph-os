import { Input, Select } from 'utils/formControls/formModel';


const options = ['Full Time', 'Part Time']

export const employeeControls = {
  employee_fname: new Input('input', 'First Name*', {required: true}),
  employee_lname: new Input('input', 'Last Name*', {required: true}),
  employee_mi: new Input('input', 'Middle Initial*', {required: true}),
  employee_nickname: new Input('input', 'Nickname', {required: false}),
  employee_email: new Input('input', 'Email*', {required: true, isEmail: true}),
  employee_postion: new Input('input', 'Position*', {required: true}),
  employee_working_arrangement: new Select('select', 'Working Arrangement', {required: true}, options)
}