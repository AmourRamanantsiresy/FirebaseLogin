import { verifyInformation } from '../Utils/Connection';
import { SignUpResponse } from '../Types/SignIn';
import { signUp } from '../Connection/Auth';
import { ISendSignInProperty } from '../Interfaces/SignUp';
import { ISendLoginFunctions } from '../Interfaces/Login';
import { closeSnackBar, setSnackBarError, setSnackBarSuccess } from '../Utils/Utils';

export const sendSignUp = (property: ISendSignInProperty, functions: ISendLoginFunctions) => {
    const { email, password, passConfirm, state } = property;
    const { setLoading } = functions;
    if (verifyInformation(email, password, passConfirm) === SignUpResponse.successful) {
        setLoading(true);
        signUp(email, password)
            .then((uC) => {
                setLoading(false);
                setSnackBarSuccess(state.setSnackbar, 'Sign Up successful!!!');
                const i = setTimeout(() => {
                    closeSnackBar(state.setSnackbar);
                    clearTimeout(i);
                    state.setState !== undefined &&
                        state.setState((e) => ({
                            ...e,
                            name: '',
                            token: uC.user.refreshToken,
                            profilePic: '',
                            email: uC.user.email || '',
                            loginType: 'password',
                            id: uC.user.uid,
                        }));
                }, 3000);
            })
            .catch((err) => {
                setLoading(false);
                setSnackBarError(state.setSnackbar, 'Email already in use');
            });
    } else {
        setSnackBarError(state.setSnackbar, 'Please verify your information');
    }
};
