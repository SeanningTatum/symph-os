import {Input, Select} from 'utils/formControls/formModel';

export const clientControls = {
  client_name: new Input('input', 'Client Name', {required: true, minLength: 3}), 
  legal_name: new Input('input', 'Legal Name', {required: true}),
  type: new Select('select', 'Type', {required: true}, 
    ["Non Profit Organization","Individual","Government","Startup","School","Company"]),
}

