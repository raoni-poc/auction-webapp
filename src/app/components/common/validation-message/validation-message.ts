export const messages = {
  required: ':name é requerido.',
  minlength: ':name precisa ter no mínimo :min caracteres',
  maxlength: ':name precisa ter no máximo :max caracteres',
  email: ':name não um e-mail válido.',
  min: ':name deve começar de :min',
  mustMatch: ':name não é igual.'
};

export class ValidationMessage {
  static getMessage(error: string, replaceTokens: Array<any>) {
    let message = messages[error];
    const tokens = message.match(/\:[a-z]+/g);
    tokens.forEach((token, index) => message = message.replace(token, replaceTokens[index]));
    return message;
  }
}
