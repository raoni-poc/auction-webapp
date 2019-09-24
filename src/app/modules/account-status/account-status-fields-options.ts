import {FieldsOptions} from '../common/fields-options/fields-options';

const accountStatusFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Status',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
};

export default accountStatusFieldOptions;
