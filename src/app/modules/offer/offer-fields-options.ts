import {FieldsOptions} from '../common/abstract/fields-options';

const offerFieldOptions: FieldsOptions = {
  route_id: {
    id: 'route_id',
    label: 'Rota',
  },
  cargo_id: {
    id: 'cargo_id',
    label: 'Carga',
  },
  offer_type_id: {
    id: 'offer_type_id',
    label: 'Tipo',
  },
  start_price: {
    id: 'start_price',
    label: 'Preço'
  },
  description: {
    id: 'description',
    label: 'Descrição'
  }
};

export default offerFieldOptions;
