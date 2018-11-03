// Help from https://www.youtube.com/watch?v=T9bReBQ801Q

const canvas = document.getElementById("canvas");

//cover entire width && height of browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2d animation
const context = canvas.getContext("2d");

//carrot image
var img = new Image();
img.src = "https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_carrot_julia_rothman_00_300x300.png?v=1532012991"


class Carrot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    fall() {
        this.y = this.y +5;
        if(this.y > canvas.height){
            this.y = 0;
        }
    }

    show() {
        context.drawImage(img, this.x, this.y, 150, 170);
    }
}

//loop through amount of carrots that will be displayed
var amountOfCarrots = 20;
var carrot = [];
for(let i = 0; i < amountOfCarrots; i++){
    //where will they show
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    carrot[i] = new Carrot(x,y);
}

function draw() {
    // context.createPattern("http://www.howardfarms.co.uk/public/img/upload/background/carrot-land-required.jpg", draw('no-repeat'));
    var my_gradient = context.createLinearGradient(0, 0, 0, 400);
    my_gradient.addColorStop(0, "skyblue");
    my_gradient.addColorStop(1, "green");
    context.fillStyle = my_gradient;
    context.fillRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i < amountOfCarrots; i++){
        carrot[i].show();
        carrot[i].fall();
    }
}

//recursive
function update() {
    draw();
    window.requestAnimationFrame(update);
}

update();

