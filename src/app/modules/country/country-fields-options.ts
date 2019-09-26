import {FieldsOptions} from '../common/abstract/fields-options';

const countryFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'País',
    placeholder: 'Digite o status.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  abbreviation: {
    id: 'abbreviation',
    label: 'Abreviação',
    placeholder: 'Digite a abreviação do país.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default countryFieldOptions;
