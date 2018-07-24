/**
 * Summary.
 * These are controls used by forms
 * 
 * Description.
 * These are the settings of input, select, etc.
 * These controls are used in forms such as AddContact.js,
 * This was created so that we could implement real time
 * error handling
 */
class Control {
  elementConfig = {};
  value = '';
  valid = false;
  touched = false;
  dirty = false;
  errorMessages = [];

  constructor(elementType, label, validation) {
    this.elementType = elementType;
    this.label = label;
    this.validation = validation;
  }
}

export class Input extends Control {
  constructor(elementType, label, validation, type = 'text', placeholder = '') {
    super(elementType, label, validation);
    this.elementConfig['type'] = type;
    this.elementConfig['placeholder'] = placeholder;
  }
}

export class Select extends Control {
  constructor(elementType, label, validation, options, type = 'text', placeholder = '') {
    super(elementType, label, validation, type, placeholder);
    this.elementConfig['options'] = options;
  }
}