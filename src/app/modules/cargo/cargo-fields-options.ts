import {FieldsOptions} from '../common/abstract/fields-options';

const accountStatusFieldOptions: FieldsOptions = {
  cargo: {
    id: 'cargo',
    label: 'Carga',
    placeholder: 'Digite a carga',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  packing: {
    id: 'cargo',
    label: 'Embalagem',
    placeholder: 'Descrição da embalagem',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  description: {
    id: 'description',
    label: 'Descrição',
    placeholder: 'Digite a descrição da carga',
    validationMessage: {
      minlength: 5,
      maxlength: 1500
    }
  },
};

export default accountStatusFieldOptions;
