import {FieldsOptions} from '../common/abstract/fields-options';

const requirementFiledsOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Digite o Nome',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  requirement_type_id: {
    id: 'name',
    label: 'Tipo de Requirimento',
  },
};

export default requirementFiledsOptions;
