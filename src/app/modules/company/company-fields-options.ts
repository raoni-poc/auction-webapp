import {FieldsOptions} from '../common/abstract/fields-options';

const companyFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Razão Social',
    placeholder: 'Digite a Razão Social',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  trade_name: {
    id: 'trade_name',
    label: 'Nome Fantasia',
    placeholder: 'Digite o Nome Fantasia',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default companyFieldOptions;
