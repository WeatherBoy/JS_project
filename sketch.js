function setup() {
    createCanvas(400, 400);
    background(180, 250, 110);
}

function draw() {
    for (let i = 0; i < 10; i++) {
        ellipse(width/2, height/2, height - i*(height/10), width - i*(width/10));
        fill(i*25, 50, 50)
    }

}
