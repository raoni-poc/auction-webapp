import {FieldsOptions} from '../common/abstract/fields-options';

const offerTypeFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Tipo da Oferta.',
    validationMessage: {
      minlength: 3,
      maxlength: 255,
    }
  },
};

export default offerTypeFieldOptions;
