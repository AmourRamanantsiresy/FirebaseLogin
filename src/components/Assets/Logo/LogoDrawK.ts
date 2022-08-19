import { TLogoDrawParams } from '../../Types/Utils';

export const draw: TLogoDrawParams = (ctx, w, h, color) => {
    ctx.strokeStyle = color || 'rgba(255, 255, 255, 0.5)';
    ctx.fillStyle = color || 'rgba(255, 255, 255, 0.5)';
    const [wd, hd] = [w / 2 - 25, h / 2 - 25];
    const position: number[][] = [
        [wd, hd],
        [wd, wd + 10],
        [wd, wd + 20],
        [wd, wd + 30],
        [wd, wd + 40],
        [wd, wd + 50],
        [wd + 10, wd + 50],
        [wd + 15, wd + 50],
        [wd + 15, wd + 40],
        [wd + 15, wd + 30],
        [wd + 22.5, wd + 40],
        [wd + 30, wd + 50],
        [wd + 40, wd + 50],
        [wd + 45, wd + 50],
        [wd + 37.5, wd + 40],
        [wd + 30, wd + 30],
        [wd + 35, wd + 20],
        [wd + 40.5, wd + 10],
        [wd + 46, wd],
        [wd + 36, wd],
        [wd + 31, wd],
        [wd + 25.5, wd + 10],
        [wd + 20, wd + 20],
        [wd + 15, wd + 30],
        [wd + 15, wd + 20],
        [wd + 15, wd + 10],
        [wd + 15, wd],
        [wd, wd],
    ];
    ctx.beginPath();
    ctx.moveTo(position[0][0], position[0][1]);
    let i = 0;
    const firstInterval = setInterval(() => {
        if (position.length === i) {
            ctx.stroke();
            ctx.closePath();
            return () => {
                clearInterval(firstInterval);
            };
        } else {
            ctx.lineTo(position[i][0], position[i][1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(position[i][0], position[i][1]);
            i++;
        }
    }, 50);
};
