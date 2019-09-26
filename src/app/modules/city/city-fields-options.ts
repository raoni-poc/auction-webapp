import {FieldsOptions} from '../common/abstract/fields-options';

const accountStatusFieldOptions: FieldsOptions = {
  ibge_code: {
    id: 'ibge_code',
    label: 'Código Ibge',
    placeholder: 'Digite o código Ibge da cidade.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  name: {
    id: 'name',
    label: 'Status',
    placeholder: 'Digite o status.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  state_id: {
    id: 'state_id',
    label: 'Estado',
  },
};

export default accountStatusFieldOptions;
