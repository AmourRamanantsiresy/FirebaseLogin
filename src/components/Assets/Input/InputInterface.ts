import { LC } from '../../Interfaces/Utils';

export interface IInputProps extends LC {
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    expected?: string;
    condition?: boolean;
}
