import {FieldsOptions} from '../common/abstract/fields-options';

const stateFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  abbreviation: {
    id: 'abbreviation',
    label: 'Abreviação',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default stateFieldOptions;
