import { FormControlsCollection, Validator } from '@lion/form-core';

export class isRomania extends Validator {
  static get validatorName() {
    return 'isRomania';
  }

  static getMessage({ fieldName }) {
    return `Please enter Romania for input ${fieldName}`;
  }

  execute(value) {
    let hasError = false;
    if (value.toUpperCase() === 'ROMANIA') {
      hasError = true;
    }
    console.log('isRomania', hasError);
    return hasError;
  }
}
