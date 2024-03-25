import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {random} from "../helper";

export class Tubes extends Drawable implements IAnimatable {
    public dx: number;
    public dy: number;
    private readonly y: number;
    public dyBis: number;
    private readonly offset: number;
    private distance: number;
    private readonly depX: number;
    private speed: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, depX: number) {
        super(ctx, canvas, sprite);

        this.offset = -settings.tubesPair.top.dw;
        this.distance = 0;

        this.y = ((this.canvas.height - settings.ground.frame.dh) / 2) - (settings.tubesPair.top.dh + settings.tubesPair.maxDistance/2);

        this.depX = depX;
        this.dx = this.depX;
        this.dy = this.y;
        this.dyBis = this.dy + settings.tubesPair.top.dh + settings.tubesPair.maxDistance;
        this.speed = 1;
    }

    update(): void {
        if (this.dx <= this.offset) this.redraw();
        if (this.speed<settings.maxSpeed) this.speed+=settings.acceleration
            this.dx-=this.speed;
    }

    redraw(): void {
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