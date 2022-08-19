function toRad(e: number) {
    return (2 * Math.PI * e) / 100;
}

export function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, color?: string) {
    ctx.strokeStyle = color || 'rgba(255,255,255,0.3)';
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
        ctx.beginPath();
        if (i === 315) {
            clearInterval(interval);
        } else {
            ctx.arc(x, y, w, toRad(j), toRad(i));
            ctx.stroke();
            j = i;
            i += 15;
        }
    }, 50);
}
