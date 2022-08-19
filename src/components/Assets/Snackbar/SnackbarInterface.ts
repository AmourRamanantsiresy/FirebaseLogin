import { LC } from '../../Interfaces/Utils';

export interface ISnackbarProps extends LC {
    type: 'Success' | 'Error' | 'Message';
    open?: boolean;
    onClose?: () => void;
}
