import { ISendLoginFunctions, ISendLoginProperty } from '../Interfaces/Login';
import { SignUpResponse } from '../Types/SignIn';
import { verifyInformation } from '../Utils/Connection';
import { signIn } from '../Connection/Auth';
import { setSnackBarError } from '../Utils/Utils';

export const sendLogin = (property: ISendLoginProperty, functions: ISendLoginFunctions) => {
    const { email, password, state } = property;
    const { setLoading } = functions;
    if (verifyInformation('this@gmail.com', password, password) === SignUpResponse.successful) {
        setLoading(true);
        signIn(email, password)
            .then((uC) => {
                if (state.setState !== undefined) {
                    setLoading(false);
                    state.setState((e) => ({
                        ...e,
                        token: uC.user.refreshToken,
                        id: uC.user.uid,
                        email: uC.user.email || 'not email',
                        profilePic: '',
                        loginType: 'password',
                        name: '',
                    }));
                }
            })
            .catch((err) => {
                if (err.message === 'auth/wrong-password') {
                    setSnackBarError(state.setSnackbar, 'Please verify your password');
                } else {
                    setSnackBarError(state.setSnackbar, 'Account not found, please sign up');
                }
                setLoading(false);
            });
    } else {
        setSnackBarError(state.setSnackbar, 'Please verify your information');
    }
};
