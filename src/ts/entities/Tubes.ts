import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {random} from "../helper";

export class Tubes extends Drawable implements IAnimatable {
    private dx: number;
    private dy: number;
    private readonly x: number;
    private readonly y: number;
    private dyBis: number;
    private number: number;
    private readonly offset: number;
    private distance: number;
    private readonly tubesDistance: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);

        this.number = settings.tubesPair.tubesNumber;
        this.offset = -settings.tubesPair.top.sw;
        this.tubesDistance = this.canvas.width / this.number;
        this.distance = 0;

        this.x = this.canvas.width;
        this.y = ((this.canvas.height - settings.ground.frame.dh) / 2) - (settings.tubesPair.top.dh + settings.tubesPair.maxDistance/2);

        this.dx = this.x;
        this.dy = this.y;
        this.dyBis = this.dy + settings.tubesPair.top.dh + settings.tubesPair.maxDistance;
    }

    update(): void {
        if (this.dx <= this.offset) this.redraw(0);
        this.dx--;

    }

    redraw(tube): void {
        this.dx = this.canvas.width;
        this.distance = random(settings.tubesPair.minDistance, settings.tubesPair.maxDistance);
        this.dy = this.y + random(settings.tubesPair.minHeight, settings.tubesPair.maxHeight);
        this.dyBis = this.dy + settings.tubesPair.top.dh + this.distance;

    }

    draw(): void {
        this.ctx.drawImage(this.sprite,
            settings.tubesPair.top.sx,
            settings.tubesPair.top.sy,
            settings.tubesPair.top.sw,
            settings.tubesPair.top.sh,
            this.dx,
            this.dy,
            settings.tubesPair.top.dw,
            settings.tubesPair.top.dh
        );
        this.ctx.drawImage(this.sprite,
            settings.tubesPair.bottom.sx,
            settings.tubesPair.bottom.sy,
            settings.tubesPair.bottom.sw,
            settings.tubesPair.bottom.sh,
            this.dx,
            this.dyBis,
            settings.tubesPair.bottom.dw,
            settings.tubesPair.bottom.dh
        );
    }

}