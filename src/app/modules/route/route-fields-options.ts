import {FieldsOptions} from '../common/abstract/fields-options';

const routeFieldOptions: FieldsOptions = {
  address_origin_id: {
    id: 'address_origin_id',
    label: 'Origem',
    validationMessage: {
      min: 1
    }
  },
  address_destination_id: {
    id: 'address_origin_id',
    label: 'Destino',
    validationMessage: {
      min: 1
    }
  },
};

export default routeFieldOptions;
