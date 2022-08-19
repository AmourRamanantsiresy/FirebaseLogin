import { ChangeEvent, Dispatch, LegacyRef, SetStateAction } from 'react';

export type DS<T> = Dispatch<SetStateAction<T>>;
export type CE<T> = ChangeEvent<T>;
export type LR<T> = LegacyRef<T>;
export type TLogoDrawParams = (ctx: CanvasRenderingContext2D, w: number, h: number, color?: string) => void;
