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
  touched = false;
  dirty = false;
  errorMessages = [];

  constructor(elementType, label, validation, valid, type) {
    this.elementType = elementType;
    this.label = label;
    this.validation = validation;
    this.valid = valid;
    this.type = type;
  }
}

export class Input extends Control {
  constructor(elementType, label, validation, valid = false, type = 'text', placeholder = '') {
    super(elementType, label, validation, valid, type);
    this.elementConfig['type'] = type;
    this.elementConfig['placeholder'] = placeholder;
  }
}

export class Select extends Control {
  constructor(elementType, label, validation, options, valid = false, type = 'text') {
    super(elementType, label, validation, valid, type);
    this.elementConfig['options'] = options;
  }
}