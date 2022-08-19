import { SendSignUp, SignUpResponse } from '../Types/SignIn';

export const verifyInformation: SendSignUp = (email, password, passConfirm?) => {
    if (
        !(!/[^\w\d.@]/gi.test(email) && email.includes('@')) ||
        password.length < 8 ||
        (passConfirm !== undefined && (passConfirm !== password || passConfirm.length < 8))
    ) {
        return SignUpResponse.inError;
    }
    return SignUpResponse.successful;
};
