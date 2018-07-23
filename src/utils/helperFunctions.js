/**
 * Summary.
 * It updates an object given the right keys
 * 
 * Description.
 * This function returns a new object, by combining 
 * the old properties and new properties.
 * @param {object} oldObject 
 * @param {object} updatedProperties 
 * 
 * @returns {object}
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

/**
 * Summary.
 * This function checks if the given string
 * is valid given the rules
 * @param {string} value 
 * @param {object} rules 
 * @returns {boolean, array}
 */
export const checkValidity = (value, rules) => {
  let isValid = true;
  const errorMessages = [];
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
    if (!(value.trim() !== '' && isValid)) {
      errorMessages.push(`This field is required`);
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!(value.length >= rules.minLength && isValid)) {
      errorMessages.push(`Should not be shorter than ${rules.minLength} characters.`);
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (!(value.length <= rules.maxLength && isValid)) {
      errorMessages.push(`Should not exceed than ${rules.minLength} characters.`);
    }
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (!(pattern.test(value) && isValid)) {
      errorMessages.push("Please enter a valid email");
    }
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid
  }

  return {isValid, errorMessages};
}