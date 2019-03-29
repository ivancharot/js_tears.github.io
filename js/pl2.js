'use strict'
class Player
{
    constructor()
    {
        this.sprite = PIXI.AnimatedSprite.fromFrames(f_frames);
        this.sprite.animationSpeed = 0.3; 
        this.sprite.play();
        this.sprite.position.set(0, app.stage.height/2-this.height/2;);

        this.speedX = 0;
        this.speedY = 0;
        this.speed = 10;

        this.fireSpeed = 10;
        this.fireCooldown = 0;

        app.stage.addChild(this.sprite);

    }

    update()
    {
          this.x+=this.speedX;
          this.y+=this.speedY;

        if (this.x<=0){
            this.speedX = 0;
            this.x=0;
        }
        else if (this.x>600-this.width){
            this.speedX=0;
            this.x=600-this.width;
        }
        if (this.y<=0){
            this.speedY = 0;
            this.y=0;
        }
        else if (this.y>=400-this.height){
            this.speedY=0;
            this.y=400-this.height;
        }

    }

    