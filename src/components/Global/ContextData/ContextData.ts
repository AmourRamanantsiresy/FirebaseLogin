import { createContext } from 'react';
import { IPrincipalState } from './ContextDataInterface';
import { principalValues } from '../Variables/Variables';

export const PrincipalStateContext = createContext<IPrincipalState>({
    values: principalValues,
    setSnackbar: (e) => {},
});
