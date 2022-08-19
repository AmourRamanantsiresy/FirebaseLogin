import React, { FC, useContext, useEffect, useRef } from 'react';
import { ILogo } from './LogoInterface';
import { draw } from './LogoDrawK';
import { drawCircle } from './LogoDrawCircle';
import { PrincipalStateContext } from '../../Global/ContextData/ContextData';

export const Logo: FC<ILogo> = (props) => {
    const state = useContext(PrincipalStateContext);
    const { className, color, w, h } = props;
    const canvas = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvas !== null && canvas.current !== null) {
            canvas.current.width = w;
            canvas.current.height = h;
            const ctx: CanvasRenderingContext2D | null = canvas.current.getContext('2d');
            const timeout = setTimeout(() => {
                ctx !== null && draw(ctx, w, h, color);
                return () => {
                    clearTimeout(timeout);
                };
            }, 1000);
            const timeout3 = setTimeout(() => {
                ctx !== null && drawCircle(ctx, w / 2 - 5, h / 2, w / 4, color);
                return () => {
                    clearTimeout(timeout3);
                };
            }, 4000);
        }
    }, [state.values.token, h, color, w]);

    return <canvas className={className} ref={canvas}></canvas>;
};
