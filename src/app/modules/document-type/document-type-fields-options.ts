import {FieldsOptions} from '../common/abstract/fields-options';

const documentTypeFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Status',
    placeholder: 'Digite o status.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default documentTypeFieldOptions;
