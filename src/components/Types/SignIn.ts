export enum SignUpResponse {
    inError = 'inError',
    outError = 'outError',
    successful = 'successful',
}

export type SendSignUp = (email: string, password: string, passConfirm: string) => SignUpResponse;
