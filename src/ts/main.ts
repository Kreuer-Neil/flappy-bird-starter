import {settings} from "./settings";
import {Background} from "./entities/Background";
import {Ground} from "./entities/Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {Tubes} from "./entities/Tubes";
import {Birdie} from "./entities/Birdie";

const canvas = document.getElementById(settings.canvasId) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const sprite: HTMLImageElement = new Image();
sprite.src = 'src/resources/sprite.png';
let requestAnimationFrameID = {id: 0};

const drawables: IAnimatable[] = [
    new Background(ctx, canvas, sprite),
    new Ground(ctx, canvas, sprite),
];
let tubes: Tubes[] = [
    //new Tubes(ctx,canvas,sprite,canvas.width/settings.tubesPair.tubesNumber)
];
for (let i = 0; i < settings.tubesPair.tubesNumber; i++) {
    tubes.push(new Tubes(ctx, canvas, sprite, (canvas.width / settings.tubesPair.tubesNumber + settings.tubesPair.top.dw / 2) * (i + 1)));
}
const birb: Birdie = new Birdie(ctx, canvas, sprite, requestAnimationFrameID);

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
    tubesPlay();
}

function birbPlay() {
    birb.draw();
    requestAnimationFrameID.id = requestAnimationFrame(animate);
    birb.update();
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            birb.goUp();
        }
    });
    terrainExit();
}

function terrainExit() {
    birb.collide(
        0, canvas.width,
        canvas.height - settings.ground.frame.dh,
        canvas.height - settings.ground.frame.dh,
    )
    birb.collide(
        0, canvas.width,
        0, 0
    )
}

function tubesPlay() {
    tubes.forEach((tubesPair: Tubes) => {
        tubesPair.draw();
        tubesPair.update();
        birb.collide(
            tubesPair.dx, tubesPair.dx + settings.tubesPair.top.dw,
            tubesPair.dy, tubesPair.dy + settings.tubesPair.top.dh
        );
        birb.collide(
            tubesPair.dx, tubesPair.dx + settings.tubesPair.top.dw,
            tubesPair.dyBis, tubesPair.dyBis + settings.tubesPair.top.dh
        );
    });
}








/*
const game = {
    init(): void {
    },
}*/