import {FieldsOptions} from '../common/abstract/fields-options';

const documentFieldOptions: FieldsOptions = {
  content: {
    id: 'content',
    label: 'content',
    placeholder: 'Conteúdo',
  },
  file: {
    id: 'file',
    label: 'file',
    placeholder: 'Arquivo',
  },
  expiration_date: {
    id: 'expiration_date',
    label: 'expiration_date',
    placeholder: 'Data de Validade',
  },
  document_type: {
    id: 'document_type',
    label: 'Tipo de Documento',
    placeholder: 'Tipo de Documento',
  },
};

export default documentFieldOptions;
