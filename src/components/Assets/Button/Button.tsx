import React, { FC } from 'react';
import { IButton } from './ButtonInterface';
import './Button.css';
import { MinLoading } from '../MinLoading/MinLoading';

export const Button: FC<IButton> = (props) => {
    const { label, onClick, className, needLoading } = props;
    return (
        <button
            className={'custom-button btn--light g-jc-center g-ai-center '.concat(
                className !== undefined ? className : ''
            )}
            onClick={onClick}
        >
            {needLoading !== undefined && needLoading ? <MinLoading size={17} /> : label}
        </button>
    );
};
