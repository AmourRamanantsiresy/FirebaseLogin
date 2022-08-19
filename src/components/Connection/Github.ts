import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { IPrincipalState } from '../Global/ContextData/ContextDataInterface';

const provider = new GithubAuthProvider();
provider.addScope('read:user');

const auth = getAuth();

export function githubSignIn(state: IPrincipalState) {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            if (state.setState !== undefined) {
                state.setState((e) => ({
                    ...e,
                    email: user.email || '',
                    profilePic: user.photoURL || '',
                    name: user.displayName || '',
                    loginType: 'github',
                    id: user.uid,
                }));
            }
        })
        .catch((error) => {
            state.setSnackbar((prevState) => ({
                ...prevState,
                open: true,
                label: 'You have already an account with your github email',
                type: 'Error',
            }));
        });
}
