import React, { CSSProperties, FC } from 'react';
import './MinLoading.css';

export const MinLoading: FC<{ size: number }> = ({ size }) => {
    const style: CSSProperties = {
        height: size.toString().concat('px'),
        width: size.toString().concat('px'),
    };

    return <div style={style} className="minLoading"></div>;
};
