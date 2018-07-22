// Start of contact controls
export const contactControls = {
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
    },
    valid: false,
    touched: false
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
    touched: false
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
    touched: false
  },

  type: {
    elementType: 'select',
    elementConfig: {
      type: 'text',
      placeholder: ''
    },
    label: 'Type',
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false
  },
}
// End of contact controls

// These are the options for the select form
export const options = [
  "Non Profit Organization",
  "Individual",
  "Government",
  "Startup",
  "School",
  "Company"
]