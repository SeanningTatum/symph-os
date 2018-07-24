import * as actionTypes from './actionTypes';

export const add = (tableName, formControls) => ({
  type: actionTypes.ADD,
  formControls,
  tableName
});