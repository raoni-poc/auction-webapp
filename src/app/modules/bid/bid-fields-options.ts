import {FieldsOptions} from '../common/abstract/fields-options';

const bidFieldOptions: FieldsOptions = {
  value: {
    id: 'value',
    label: 'Valor',
    placeholder: 'Digite o valor do lance.',
    validationMessage: {
      min: 1,
    }
  },
  offer_id: {
    id: 'offer_id',
    label: 'Oferta',
    placeholder: 'Escolha a oferta do lance',
    validationMessage: {
      min: 1,
    }
  },
};

export default bidFieldOptions;
