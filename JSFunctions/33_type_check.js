/**
 * Type checking utilities
 */

const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);
const isArray = (val) => Array.isArray(val);
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number' && !isNaN(val);
const isBoolean = (val) => typeof val === 'boolean';
const isNull = (val) => val === null;
const isUndefined = (val) => val === undefined;

module.exports = { 
  isObject, 
  isArray, 
  isFunction, 
  isString, 
  isNumber, 
  isBoolean, 
  isNull, 
  isUndefined 
};
