import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { IPrincipalState } from '../Global/ContextData/ContextDataInterface';

const provider = new FacebookAuthProvider();

const auth = getAuth();
export function facebookSignIn(state: IPrincipalState) {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            if (state.setState !== undefined) {
                console.log(user);
                state.setState((e) => ({
                    ...e,
                    email: user.email || '',
                    id: user.uid,
                    token: user.refreshToken,
                    loginType: 'facebook',
                    profilePic: user.photoURL || '',
                    name: user.displayName || '',
                }));
            }
        })
        .catch((error) => {
            state.setSnackbar((prevState) => ({
                ...prevState,
                open: true,
                label: 'You have already an account with your facebook email',
                type: 'Error',
            }));
        });
}
