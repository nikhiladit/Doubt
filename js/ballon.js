class Red_Balloon {
    constructor(x, y, w, h) {
        let options={
            isStatic: true,
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.balloon_image = loadImage("./assets/red.png");
        console.log(this.body.position.y);
        World.add(world, this.body);
    }

    speed() {
        Matter.Body.setVelocity(this.body, { x: 0, y: -2 });
    }

    show() {
        let pos = this.body.position;
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.balloon_image, 0, 0, width/2, height/2);
        pop();
        noFill();
    }
}