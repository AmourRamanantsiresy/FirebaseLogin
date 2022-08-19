import { IAlertState } from './VariablesInterface';
import { HomeStatus, IPrincipalValues, ConnectionState } from './VariablesInterface';

export const snackBarInitialState: IAlertState = { type: 'Message', label: '', open: false };

export const homeSnackbarInitialState: IAlertState = {
    type: 'Message',
    label: '',
    open: false,
};

export const principalValues: IPrincipalValues = {
    stateConnection: ConnectionState.SIGN_IN,
    id: '',
    token: '',
    email: '',
    homeStatus: HomeStatus.LOADING,
    loginType: 'none',
    profilePic: '',
    name: '',
};
