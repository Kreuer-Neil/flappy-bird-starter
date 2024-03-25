import {settings} from "./settings";
import {Background} from "./entities/Background";
import {Ground} from "./entities/Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {Tubes} from "./entities/Tubes";
import {Birdie} from "./entities/Birdie";
import {checkCollision} from "./helper";

const canvas = document.getElementById(settings.canvasId) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const sprite: HTMLImageElement = new Image();
sprite.src = 'src/resources/sprite.png';

const drawables: IAnimatable[] = [
    new Background(ctx, canvas, sprite),
    new Ground(ctx, canvas, sprite),
    new Tubes(ctx, canvas, sprite),
];
const birb: Birdie = new Birdie(ctx, canvas, sprite);

sprite.addEventListener('load', () => {
    animate();
});


function animate(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawables.forEach((iAnimatable: IAnimatable) => {
        iAnimatable.draw();
        iAnimatable.update();
    });
    birbPlay();
    checkCollisions();

    window.requestAnimationFrame(animate);
}

function birbPlay() {
    birb.draw();
    birb.update();
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            // @ts-ignore
            birb.goUp();
        }
    });
}

function checkCollisions() {

}








/*
const game = {
    init(): void {
    },
}*/