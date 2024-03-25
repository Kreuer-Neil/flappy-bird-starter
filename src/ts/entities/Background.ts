import {settings} from "../settings";
import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";

export class Background extends Drawable implements IAnimatable {

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);
    }

    update(): void {
    }

    draw(): void {
        this.ctx.drawImage(this.sprite,
            settings.background.frame.sx, settings.background.frame.sy,
            settings.background.frame.sw, settings.background.frame.sh,
            settings.background.frame.dx, settings.background.frame.dy,
            settings.background.frame.dw, settings.background.frame.dh
        );
    }
}