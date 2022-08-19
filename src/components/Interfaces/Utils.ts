export interface LC {
    label: string;
    className?: string;
    type?: string;
}

export interface IAlertProps extends LC {
    status: boolean;
    callback?: () => void;
}
