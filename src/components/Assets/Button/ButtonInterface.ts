import { LC } from '../../Interfaces/Utils';

export interface IButton extends LC {
    onClick: () => void;
    needLoading?: boolean;
}
