export abstract class Drawable {
    protected ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;
    protected sprite: HTMLImageElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = sprite;
    }

}