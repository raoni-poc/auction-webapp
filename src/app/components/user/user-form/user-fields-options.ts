import {FieldsOptions} from '../../common/fields-options/fields-options.js';

const userFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    validationMessage: {
      minlength: 5,
      maxlength: 255
    }
  },
  email: {
    id: 'email',
    label: 'Email',
    validationMessage: {
      minlength: 5,
      maxlength: 255
    }
  },
  password: {
    id: 'password',
    label: 'Senha',
    validationMessage: {
      minlength: 8,
      maxlenght: 255
    }
  },
  repassword: {
    id: 'repassoword',
    label: 'Confime a Senha',
  }
  // product_id: {
  //   id: 'product_id',
  //   label: 'Produto',
  // },
  // amount: {
  //   id: 'amount',
  //   label: 'Quantidade',
  //   validationMessage: {
  //     min: 1
  //   }
  // }
};

export default userFieldOptions;
