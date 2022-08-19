import { IPrincipalValues, ConnectionState, IAlertState } from '../Variables/VariablesInterface';
import { DS } from '../../Types/Utils';

export interface IPrincipalState {
    values: IPrincipalValues;
    setConnection?: (state: ConnectionState) => void;
    setState?: DS<IPrincipalValues>;
    setSnackbar: DS<IAlertState>;
}
