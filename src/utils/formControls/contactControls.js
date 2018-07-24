import { Input } from 'utils/formControls/formModel';

export const contactControls = {
  contact_name: new Input('input', 'Contact Name*', {required: true}),
  contact_nickname: new Input('input', 'Nickname*', {required: true}),
  contact_number: new Input('input', 'Contact Number*', {required: true, minLength: 11}),
  contact_email: new Input('input', 'Email*', {required: true, isEmail: true}),
  contact_company: new Input('input', 'Company*', {required: true}),
  contact_position: new Input('input', 'Postion*', {required: true})
}
