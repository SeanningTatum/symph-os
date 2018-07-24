import {Input, Select} from 'utils/formControls/formModel';

const options = ["Non Profit Organization","Individual","Government","Startup","School","Company"];

export const clientControls = {
  client_name: new Input('input', 'Client Name*', {required: true, minLength: 3}), 
  legal_name: new Input('input', 'Legal Name*', {required: true}),
  type: new Select('select', 'Type*', {required: true}, options),
}

