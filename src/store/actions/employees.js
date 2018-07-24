import * as actionTypes from './actionTypes';

export const addEmployee = (employeeControls) => ({
  type: actionTypes.ADD_EMPLOYEE,
  employeeControls
});