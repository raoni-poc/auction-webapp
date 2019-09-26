import {FieldsOptions} from '../common/abstract/fields-options';

const userFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    placeholder: 'Digite seu nome.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  email: {
    id: 'email',
    label: 'Email',
    placeholder: 'Digite seu email.',
    validationMessage: {
      minlength: 3,
      maxlength: 255
    }
  },
  password: {
    id: 'password',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    validationMessage: {
      minlength: 8,
      maxlength: 255
    }
  },
};

export default userFieldOptions;
