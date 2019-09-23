import {FieldsOptions} from '../common/fields-options/fields-options';

const companyFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Razão Social',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  trade_name: {
    id: 'trade_name',
    label: 'Nome Fantasia',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default companyFieldOptions;
