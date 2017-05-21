
var soundData = {
    0: new Howl({
        urls: ['sounds/bubbles.mp3']
    }),
    1: new Howl({
        urls: ['sounds/clay.mp3']
    }),
    2: new Howl({
        urls: ['sounds/confetti.mp3']
    }),
    3: new Howl({
        urls: ['sounds/corona.mp3']
    }),
    4: new Howl({
        urls: ['sounds/dotted-spiral.mp3']
    }),
    5: new Howl({
        urls: ['sounds/flash-1.mp3']
    }),
    6: new Howl({
        urls: ['sounds/flash-2.mp3']
    }),
    7: new Howl({
        urls: ['sounds/flash-3.mp3']
    }),
    8: new Howl({
        urls: ['sounds/glimmer.mp3']
    }),
    9: new Howl({
        urls: ['sounds/moon.mp3']
    }),
    10: new Howl({
        urls: ['sounds/pinwheel.mp3']
    }),
    11: new Howl({
        urls: ['sounds/piston-1.mp3']
    }),
    12: new Howl({
        urls: ['sounds/piston-2.mp3']
    }),
    13: new Howl({
        urls: ['sounds/piston-3.mp3']
    }),
    14: new Howl({
        urls: ['sounds/prism-1.mp3']
    }),
    15: new Howl({
        urls: ['sounds/prism-2.mp3']
    }),
    16: new Howl({
        urls: ['sounds/prism-3.mp3']
    }),
    17: new Howl({
        urls: ['sounds/splits.mp3']
    }),
    18: new Howl({
        urls: ['sounds/squiggle.mp3']
    }),
    19: new Howl({
        urls: ['sounds/strike.mp3']
    }),
    20: new Howl({
        urls: ['sounds/suspension.mp3']
    }),
    21: new Howl({
        urls: ['sounds/timer.mp3']
    }),
    22: new Howl({
        urls: ['sounds/ufo.mp3']
    }),
    23: new Howl({
        urls: ['sounds/veil.mp3']
    }),
    24: new Howl({
        urls: ['sounds/wipe.mp3']
    }),
    25: new Howl({
        urls: ['sounds/zig-zag.mp3']
    })
};

var circles = [];
function onMouseDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500)
    newCircle.fillColor = getRandomColor();
    soundData[getRandomIndex()].play();
    circles.push(newCircle);
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomIndex(){
    return Math.floor(Math.random() * 26);
}