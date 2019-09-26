import {FieldsOptions} from '../common/abstract/fields-options';

const roleFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Digite um Nome para Regra.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  guard_name: {
    id: 'guard_name',
    label: 'Nome',
    placeholder: 'Digite um nome guardião.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default roleFieldOptions;
