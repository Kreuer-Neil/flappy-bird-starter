export function random(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min)) + min);
}

export function checkCollision(ax1: number, ax2: number, ay1: number, ay2: number,
                               bx1: number, bx2: number, by1: number, by2: number
                               ):boolean {
    return !(ax2 < bx1 || ay2 < by1 || ax1 > bx2 || ay1 > by2);
}