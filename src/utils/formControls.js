/**
 * Summary.
 * These are controls used by forms
 * 
 * Description.
 * These are the settings of input, select, etc.
 * These controls are used in forms such as AddContact.js
 */
export const clientControls = {
  client_name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    label: 'Client Name',
    value: '',
    validation: {
      required: true,
      minLength: 3
    },
    valid: false,
    touched: false,
    dirty: false
  },

  legal_name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: ''
    },
    label: 'Legal Name',
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    dirty: false
  },

  contact_name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: ''
    },
    label: 'Contact Name',
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    dirty: false
  },

  type: {
    elementType: 'select',
    elementConfig: {
      options: [
        "Non Profit Organization",
        "Individual",
        "Government",
        "Startup",
        "School",
        "Company"
      ]
    },
    label: 'Type',
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    dirty: false
  },
}
// End of contact controls
