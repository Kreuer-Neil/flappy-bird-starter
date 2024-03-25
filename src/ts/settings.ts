export const settings = {
    birdie: {
        frames: [
            {sx: 6, sy: 982},
            {sx: 62, sy: 982},
            {sx: 118, sy: 982}
        ],
        framesBis: {
            sw: 34,
            sh: 24,
            dw: 34,
            dh: 24,
        },
        rotation: {
            minRota: -40,
            maxRota: 90,
            angularSpeed: 2,
            timerRota: 30,
        },
        animationTime: 7,
        maxFallSpeed: 6,
        jump: 3,
    },
    background: {
        frame: {
            sx: 0,
            sy: 0,
            sw: 288,
            sh: 511,
            dx: 0,
            dy: 0,
            dw: 288,
            dh: 511
        }
    },
    ground: {
        frame: {
            sx: 584,
            sy: 0,
            sw: 336,
            sh: 112,
            dx: 0,
            dy: 0,
            dw: 336,
            dh: 112
        },
    },
    tubesPair: {
        top: {
            sx: 112, //553,
            sy: 646, //0,
            sw: 52, //53,
            sh: 320, //400,
            dx: 0,
            dy: 0,
            dw: 52, //53,
            dh: 320, //400
        },
        bottom: {
            sx: 168, //502,
            sy: 646, //0,
            sw: 52, //53,
            sh: 320, //400,
            dx: 0,
            dy: 0,
            dw: 52, //53,
            dh: 320, //400
        },
        tubesNumber: 1,
        minHeight: -130,
        maxHeight: 130,
        minDistance: 60,
        maxDistance: 100,
    },
    canvasId: 'game',
    gravity: .07,
}