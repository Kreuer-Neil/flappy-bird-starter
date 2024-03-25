import {Drawable} from "./Drawable";
import {settings} from "../settings";
import {IAnimatable} from "../Types/IAnimatable";

export class Ground extends Drawable implements IAnimatable {
    private dx: number;
    private readonly dy: number;
    private readonly maxOffset: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);
        this.dx = 0;
        this.dy = this.canvas.height - settings.ground.frame.sh;
        this.maxOffset = settings.ground.frame.sw - this.canvas.width;
    }

    update(): void {
        if (this.dx <= -this.maxOffset) this.dx = 0;
        this.dx--;
    }

    draw(): void {
        this.ctx.drawImage(this.sprite,
            settings.ground.frame.sx, settings.ground.frame.sy,
            settings.ground.frame.sw, settings.ground.frame.sh,
            this.dx, this.dy,
            settings.ground.frame.dw, settings.ground.frame.dh
        );
    }
}