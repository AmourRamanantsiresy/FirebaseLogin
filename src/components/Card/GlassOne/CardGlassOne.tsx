import React, { FC } from 'react';
import { ILoginCardProps } from './CardGlassOneInterface';
import './CardGlassOne.css';

export const CardGlassOne: FC<ILoginCardProps> = (props) => {
    const { children, className } = props;
    return (
        <div className="lc-container g-rounded-min">
            <div className="lc-round lc-round--1"></div>
            <div className="lc-round lc-round--2"></div>
            <div className="lc-round lc-round--3"></div>
            <div className={'lc-card g-rounded-min ' + className}>{children}</div>
        </div>
    );
};
