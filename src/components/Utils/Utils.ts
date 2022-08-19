import { DS } from '../Types/Utils';
import { ISignUpInformation } from '../Interfaces/Login';
import { ConnectionState, IAlertState, IPrincipalValues } from '../Global/Variables/VariablesInterface';
import { snackBarInitialState } from '../Global/Variables/Variables';

export function handleChangeTemplate<T1, T2>(value: T1, setState: DS<T2>): void {
    setState((e) => ({ ...e, ...value }));
}

export const signInInitialValue: ISignUpInformation = {
    email: '',
    password: '',
    passConfirm: '',
};

export function changePrincipalStateTemplate<T>(key: string, value: T, setState: DS<IPrincipalValues>): void {
    setState((e) => ({ ...e, [key]: value }));
}

export function labelForConnection(state: ConnectionState): string {
    if (state === ConnectionState.SIGN_IN) {
        return 'Create account?';
    }
    return 'Already have an account?';
}

export const closeSnackBar = (setAlert: DS<IAlertState>): void => {
    setAlert(snackBarInitialState);
};

export const setSnackBarError = (setAlert: DS<IAlertState>, label: string): void => {
    setAlert({ label, open: true, type: 'Error' });
};

export const setSnackBarSuccess = (setAlert: DS<IAlertState>, label: string): void => {
    setAlert({ label, open: true, type: 'Success' });
};

export const setSnackBarMessage = (setAlert: DS<IAlertState>, label: string): void => {
    setAlert({ label, open: true, type: 'Message' });
};
