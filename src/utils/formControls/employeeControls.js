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
