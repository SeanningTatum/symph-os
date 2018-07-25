import { Input } from 'utils/formControls/formModel';

export const contactControls = {
  name: new Input('input', 'Contact Name*', {required: true}),
  nickname: new Input('input', 'Nickname*', {required: true}),
  number: new Input('input', 'Contact Number*', {required: true, minLength: 11}),
  email: new Input('input', 'Email*', {required: true, isEmail: true}),
  company: new Input('input', 'Company*', {required: true}),
  position: new Input('input', 'Postion*', {required: true})
}
