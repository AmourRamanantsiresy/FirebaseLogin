import { IPrincipalState } from '../Global/ContextData/ContextDataInterface';
import { DS } from '../Types/Utils';
import { IAlertState } from '../Global/Variables/VariablesInterface';
export interface ILoginInformation {
    password: string;
    email: string;
}

export interface ISignUpInformation extends ILoginInformation {
    passConfirm: string;
}

export interface ISendLoginProperty {
    email: string;
    password: string;
    state: IPrincipalState;
}

export interface ISendLoginFunctions {
    setLoading: DS<boolean>;
}
