import {FieldsOptions} from '../common/fields-options/fields-options';

const addressFieldOptions: FieldsOptions = {
  city: {
    id: 'city',
    label: 'Cidade'
  },
  number: {
    id: 'number',
    label: 'Número'
  },
  zip_code: {
    id: 'zip_code',
    label: 'CEP'
  },
  neighborhood: {
    id: 'neighborhood',
    label: 'Bairro'
  },
  complement: {
    id: 'complement',
    label: 'Complemento'
  },
  note: {
    id: 'note',
    label: 'Nota',
  },
  address: {
    id: 'address',
    label: 'Endereço',
  }

  // name: {
  //   id: 'name',
  //   label: 'Status',
  //   validationMessage: {
  //     minlength: 3,
  //     maxlength: 255
  //   }
  // },
};

export default addressFieldOptions;
