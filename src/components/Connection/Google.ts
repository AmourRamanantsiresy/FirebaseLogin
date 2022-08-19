import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { IPrincipalState } from '../Global/ContextData/ContextDataInterface';

const provider = new GoogleAuthProvider();

const auth = getAuth();

export function googleSignIn(state: IPrincipalState): void {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            if (state.setState !== undefined) {
                state.setState((e) => ({
                    ...e,
                    email: user.email || '',
                    id: user.uid,
                    token: user.refreshToken,
                    loginType: 'google',
                    name: user.displayName || '',
                    profilePic: user.photoURL || '',
                }));
            }
        })
        .catch((error) => {
            state.setSnackbar((prevState) => ({
                ...prevState,
                open: true,
                label: 'You have already an account with this email',
                type: 'Error',
            }));
        });
}
