export interface IAlertState {
    type: 'Success' | 'Error' | 'Message';
    label: string;
    open: boolean;
}

export enum ConnectionState {
    SIGN_UP = 'Sign_UP',
    SIGN_IN = 'Sign_In',
}

export enum HomeStatus {
    HOME_LOGIN = 'login',
    HOME = 'home',
    LOADING = 'loading',
}

export type LoginType = 'facebook' | 'google' | 'password' | 'github' | 'none';

export interface IPrincipalValues {
    stateConnection: ConnectionState;
    id: string;
    token: string;
    email: string;
    homeStatus?: HomeStatus;
    loginType?: LoginType;
    profilePic?: string;
    name?: string;
}
