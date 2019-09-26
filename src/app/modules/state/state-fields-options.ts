import {FieldsOptions} from '../common/abstract/fields-options';

const stateFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Digite o Estado',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  abbreviation: {
    id: 'abbreviation',
    label: 'Abreviação',
    placeholder: 'Digite a abreviação do estado',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  country_id: {
    id: 'country_id',
    label: 'Pais',
  },
};

export default stateFieldOptions;
