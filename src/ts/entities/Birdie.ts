import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {checkCollision} from "../helper";

export class Birdie extends Drawable implements IAnimatable {
    private readonly dx: number;
    private dy: number;
    private angle: number;
    private sx: number;
    private sy: number;
    private frame: number;
    private timer: number;
    private timerRota: number;
    private fallSpeed: number;
    private readonly groundLevel: number;
    private readonly requestAnimationFrameID:{id:number};

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, requestAnimationFrameID:{id:number}) {
        super(ctx, canvas, sprite);
        this.dx = this.canvas.width / 2;
        this.dy = (this.canvas.height - settings.ground.frame.dh) / 2;
        this.frame = 0;
        this.timer = 0;
        this.fallSpeed = 0;
        this.angle = 0;
        this.timerRota = settings.birdie.rotation.maxRota;
        this.groundLevel = (this.canvas.height - settings.ground.frame.dh) - settings.birdie.framesBis.dh;

        this.sx = settings.birdie.frames[0].sx;
        this.sy = settings.birdie.frames[0].sy;

        this.requestAnimationFrameID = requestAnimationFrameID;
    }

    public update() {
        this.animate();

        if (this.fallSpeed < settings.birdie.maxFallSpeed)
            this.fallSpeed += settings.gravity;

        this.dy += this.fallSpeed;
        // if (this.dy - settings.birdie.framesBis.dh / 2 >= this.groundLevel) this.dy = this.groundLevel + settings.birdie.framesBis.dh / 2;

        if (this.timerRota <= 0 && this.angle <= settings.birdie.rotation.maxRota)
            this.angle += settings.birdie.rotation.angularSpeed;
        else this.timerRota--;
    }

    public goUp() {
        this.fallSpeed = -settings.birdie.jump;
        this.angle = settings.birdie.rotation.minRota;
        this.timerRota = settings.birdie.rotation.timerRota;
    }

    private animate() {
        if (this.timer === settings.birdie.animationTime) {
            this.timer = 0;
            this.frame++;
            if (this.frame >= settings.birdie.frames.length) this.frame = 0;
            this.sx = settings.birdie.frames[this.frame].sx;
            this.sy = settings.birdie.frames[this.frame].sy;
        }
        this.timer++;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.dx, this.dy);
        this.ctx.rotate((this.angle * Math.PI) / 180);
        this.ctx.drawImage(
            this.sprite,
            this.sx, this.sy,
            settings.birdie.framesBis.sw, settings.birdie.framesBis.sh,
            -settings.birdie.framesBis.dw / 2, -settings.birdie.framesBis.dh / 2,
            settings.birdie.framesBis.dw, settings.birdie.framesBis.dh,
        );
        this.ctx.restore();
    }

    public collide(x1:number,x2:number,y1:number,y2:number) {
        if(checkCollision(
            this.dx-settings.birdie.framesBis.dw / 2,
            this.dx+settings.birdie.framesBis.dw / 2,
            this.dy-settings.birdie.framesBis.dh / 2,
            this.dy+settings.birdie.framesBis.dh / 2,
            x1,x2,y1,y2
        )) this.endGame();
    }

    private endGame() {
        cancelAnimationFrame(this.requestAnimationFrameID.id);
    }
}