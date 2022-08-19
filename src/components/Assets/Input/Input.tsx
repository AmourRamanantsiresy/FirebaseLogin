import React, { FC } from 'react';
import './Input.css';
import { IInputProps } from './InputInterface';

export const Input: FC<IInputProps> = (props) => {
    const { value, onChange, label, className, type, onBlur, onFocus, expected, condition } = props;
    const isWrong: boolean = (expected !== undefined && expected !== value) || (condition !== undefined && !condition);
    return (
        <div className={className != null ? className : ''}>
            <label htmlFor={'input' + label} className="input-container">
                <input
                    onBlur={onBlur}
                    onFocus={onFocus}
                    id={'input' + label}
                    className={'input-container--input ' + (isWrong ? 'input-container--input__wrong' : '')}
                    type={type !== null ? type : 'text'}
                    placeholder={label}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </div>
    );
};
