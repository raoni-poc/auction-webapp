export interface FieldsOptions {
  [field: string]: {
    id: string,
    label: string,
    placeholder: string,
    validationMessage?: {
      [error: string]: any
    }
  };
}
