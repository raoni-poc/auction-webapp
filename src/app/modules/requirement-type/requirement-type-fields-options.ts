import {FieldsOptions} from '../common/abstract/fields-options';

const requirementTypeFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Digite o tipo de requisito.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default requirementTypeFieldOptions;
