import {FieldsOptions} from '../common/abstract/fields-options';

const addressFieldOptions: FieldsOptions = {
  city_id: {
    id: 'city_id',
    label: 'Cidade',
  },
  number: {
    id: 'number',
    label: 'Número',
    placeholder: 'Digite o Número'
  },
  zip_code: {
    id: 'zip_code',
    label: 'CEP',
    placeholder: 'Digite o CEP'
  },
  neighborhood: {
    id: 'neighborhood',
    label: 'Bairro',
    placeholder: 'Digite o Bairro',
  },
  complement: {
    id: 'complement',
    label: 'Complemento',
    placeholder: 'Digite um complemento de endereço'
  },
  note: {
    id: 'note',
    label: 'Nota',
    placeholder: 'Alguma observação sobre o endereço?'
  },
  address: {
    id: 'address',
    label: 'Endereço',
    placeholder: 'Digite o Endereço'
  }
};

export default addressFieldOptions;
