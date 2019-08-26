// https://www.youtube.com/watch?v=g8E2XikfTqA menu music
// https://www.youtube.com/watch?v=Kjxs_pXFOb4 game music


// works in radiansssss and not degreessss
// function radianConverter(radian, distance){      

//     console.log(degree)
  
//     let posx = distance *  Math.cos(degree);
//     let posy = distance *  Math.sin(degree);
  
//     console.log('posx',posx,'posy',posy)
  
  
//   }
  
//   radianConverter(0,1)




this.canvas = canvas;
this.ctx = this.canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

let posy = -200;

let base_image = new Image();
base_image.src = '../assets/developer.svg';

let base_image2 = new Image();
base_image2.src = '../assets/404.svg';

let base_image3 = new Image();
base_image3.src = '../assets/typeError.svg';

let base_image4 = new Image();
base_image4.src = '../assets/bear.svg';

let base_image5 = new Image();
base_image5.src = '../assets/sheep.svg';

let base_image6 = new Image();
base_image6.src = '../assets/javascript.svg';

let base_image7 = new Image();
base_image7.src = '../assets/inicial.svg';

let base_image8 = new Image();
base_image8.src = '../assets/desk.svg';

let base_image9 = new Image();
base_image9.src = '../assets/flag1.svg';

let base_image10 = new Image();
base_image10.src = '../assets/flag2.svg';

let base_image11 = new Image();
base_image11.src = '../assets/flag3.svg';

let base_image12 = new Image();
base_image12.src = '../assets/flag4.svg';


let shoot1_sound = new Audio("../assets/shoot1.mp3", {
    volume: 1
});

let map_sound = new Audio("../assets/tes.mp3", {
    volume: 1
});

let level1_sound = new Audio("../assets/west.mp3", {
    volume: 1
});




let globalScope = this;

let globalMousePosition = {
    x: 900,
    y: 900
}

window.onload = function () {

    //---------------------- mouse logic  ------------------------------------------

    function getMousePos(evt) {
        var rect = globalScope.canvas.getBoundingClientRect();

        globalMousePosition.x = evt.clientX - rect.left;
        globalMousePosition.y = evt.clientY - rect.top;
        console.log(globalMousePosition)
    }

    function onCanvasClickGetMousePosition() {
        globalScope.canvas.addEventListener('click', function (evt) {
            getMousePos(evt);
            shoot1_sound.play();
        })
    }

    function resetMouseState() {
        globalMousePosition.x = 50000;
        globalMousePosition.y = 50000;
    }

    onCanvasClickGetMousePosition();
    //------------------------- Classes  -------------------


    //----------------------------- game class --------------------------------

    class game {
        constructor() {
            this.level = 0;
            this.levelCompleted = {
                level_1: false,
                level_2: false,
                level_3: false
            }
        }

        teste() {
            console.log('teste game passou')
        }

        main_function() {
            switch (this.level) {
                case 0: // intro level
                    console.log('intro')
                    ctx.drawImage(base_image7, 0, 0, width, height);
                    if (globalMousePosition.y >= 568 && globalMousePosition.y <= 616) {
                        this.level = 1;
                        resetMouseState()
                    }
                    break;
                case 1: // map level
                    console.log('map')
                    map_sound.play();
                    ctx.drawImage(base_image8, 0, 0, width, height);
                    ctx.drawImage(base_image9, 193, 385, width/6, height/6);

                    map_sound.play();
                    if (globalMousePosition.y >= 468 && globalMousePosition.y <= 506) {
                        this.level = 2;
                        resetMouseState()
                    }
                    break;
                case 2: // first level boot camp
                    level1_sound.play();
                    map_sound.pause();
                    enemy_404_1.posy += 0.9;
                    enemy_typeError_1.posy += 0.9;
                    enemy_bear_1.posx += 0.8;
                    enemy_sheep_1.posx -= 0.5;
                    enemy_sheep_1.posy -= 0.5;
                    ctx.clearRect(0, 0, width, height)

                    dev1.paint();
                    enemy_404_1.paint();
                    enemy_typeError_1.paint();
                    enemy_bear_1.paint();
                    enemy_sheep_1.paint();
                    enemy_sheep_2.paint();
                    resetMouseState()
                    break;
                case 3: // second level junior developer
                    console.log('second level junior developer')
                    break;
                case 4: // third level senior developer
                    console.log('third level senior developer')
                    break;
                case 5: // final level last level
                    console.log('final level last level')
                    break;
                case 6: //  show enemies on the map menu
                    console.log('show enemies on the map menu')
                    break;
                default:
                    console.log('default')
                    break;
            }
        }



    }


    //---------------------------   class dev      ---------------------------------

    class dev {
        constructor() {
            this.health = 5
        }
        teste() {
            console.log('teste passou')
        }
        paint() {
            ctx.drawImage(base_image, width / 3, height / 3, width / 4, height / 4);
        }
    }

    //--------------------------- class enemy 404 ----------------------------------

    class enemy_404 {
        constructor(posx, posy, offset_left, offset_right, offset_top, offset_bottom) {
            this.health = 5


            this.posx = 0;
            this.posy = -200;
            this.offset_left = 0;
            this.offset_right = 0;
            this.offset_top = this.posy + 31;
            this.offset_bottom = this.posy + 131;

            this.isAlive = true;
        }
        teste() {
            console.log('teste passou')
        }
        getShoot() {

            if (this.isAlive === false) {
                this.offset_top = 900;
                this.offset_bottom = 900;
            } else {
                this.offset_top = this.posy + 31;
                this.offset_bottom = this.posy + 131;

                // console.log('globalMousePosition2', globalMousePosition)

                if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
                    console.log('died')

                    this.isAlive = false;
                } else {
                    ctx.drawImage(base_image2, width / 3, this.posy, width / 4, height / 4);
                }
            }
        }
        reachTheCenter(){
            if(posx >= 300 && posx <= 400 ) {
                // the game shows the death menu
            }
        }
        paint() {
            this.getShoot();
        }
    }


    //--------------------------  enemy class type error  -----------------------------------

    class enemy_typeError {
        constructor(posx, posy, offset_left, offset_right, offset_top, offset_bottom) {
            this.health = 5


            this.posx = 0;
            this.posy = -550;
            this.offset_left = 0;
            this.offset_right = 0;
            this.offset_top = this.posy + 31;
            this.offset_bottom = this.posy + 131;

            this.isAlive = true;
        }

        getShoot() {

            if (this.isAlive === false) {
                this.offset_top = 900;
                this.offset_bottom = 900;
            } else {
                this.offset_top = this.posy + 31;
                this.offset_bottom = this.posy + 131;

                // console.log('globalMousePosition2', globalMousePosition)

                if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
                    console.log('died')

                    this.isAlive = false;
                } else {
                    ctx.drawImage(base_image3, width / 3, this.posy, width / 4, height / 4);
                }
            }
        }
        paint() {
            this.getShoot();
        }
    }

    //----------------------------  class enemy bear  -----------------------------------

    class enemy_bear {
        constructor(posx, posy, offset_left, offset_right, offset_top, offset_bottom) {
            this.health = 5


            this.posx = -330;
            this.posy = 0;
            this.offset_left = 0;
            this.offset_right = 0;
            this.offset_top = this.posy + 31;
            this.offset_bottom = this.posy + 131;

            this.isAlive = true;
        }

        teste() {
            console.log('teste passou')
        }

        getShoot() {

            if (this.isAlive === false) {
                this.offset_top = 900;
                this.offset_bottom = 900;
            } else {
                this.offset_top = this.posy + 300;
                this.offset_bottom = this.posy + 370;

                // console.log('globalMousePosition2', globalMousePosition)
                // console.log('this.offset_top', this.offset_top,'this.offset_bottom',this.offset_bottom,'posx',this.posx,'posy',this.posy)

                if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
                    console.log('died')

                    this.isAlive = false;
                } else {
                    ctx.drawImage(base_image4, this.posx, height/3 +20, width / 6, height / 6);
                }
            }
        }
        paint() {
            this.getShoot();
        }

    }

    //------------------------- class enemy sheep --------------------------------------

    class enemy_sheep {
        constructor(posx, posy, offset_left, offset_right, offset_top, offset_bottom) {
            this.health = 5


            this.posx = 800;
            this.posy = 800;
            this.offset_left = 0;
            this.offset_right = 0;
            this.offset_top = this.posy + 31;
            this.offset_bottom = this.posy + 131;

            this.isAlive = true;
        }

        teste() {
            console.log('teste passou')
        }

        getShoot() {

            if (this.isAlive === false) {
                this.offset_top = 900;
                this.offset_bottom = 900;
            } else {
                this.offset_top = this.posy  + 0;
                this.offset_bottom = this.posy  + 70;

                console.log('globalMousePosition2', globalMousePosition)
                console.log('this.offset_top: ', this.offset_top,'this.offset_bottom: ',this.offset_bottom,'posx: ',this.posx,'posy: ',this.posy)

                if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
                    console.log('died')

                    this.isAlive = false;
                } else {
                    ctx.drawImage(base_image5, this.posx, this.posy, width / 7, height / 7);
                }
            }
        }
        paint() {
            this.getShoot();
        }

    }

    //---------------------------------------------------------------

    class enemy5 {
        constructor() {
            this.health = 5


        }

        teste() {
            console.log('teste passou')
        }

        paint() {
            ctx.drawImage(base_image6, 250, 150, width / 5, height / 5);
        }

    }

    //--------------------------- enemy main class  ------------------------------------



    // this is the main enemy class
    // enemy random class , random postion and then goes to center
    // enemy(distance, speed, base_image) the inicial position is random





    class enemy_main {
        constructor(posx, posy) {
            this.health = 5


            this.posx = posx;
            this.posy = posy;
            this.offset_left = 0;
            this.offset_right = 0;
            this.offset_top = this.posy + 31;
            this.offset_bottom = this.posy + 131;

            this.isAlive = true;
        }

        teste() {
            console.log('teste passou')
        }

        addingForAnimating(){
            //this.posx +=1;
        }

        getShoot() {

            if (this.isAlive === false) {
                this.offset_top = 900;
                this.offset_bottom = 900;
            } else {
                this.offset_top = this.posy  + 0;
                this.offset_bottom = this.posy  + 70;

                console.log('globalMousePosition2', globalMousePosition)
                console.log('this.offset_top: ', this.offset_top,'this.offset_bottom: ',this.offset_bottom,'posx: ',this.posx,'posy: ',this.posy)

                if (globalMousePosition.y >= this.offset_top && globalMousePosition.y <= this.offset_bottom) {
                    console.log('died')

                    this.isAlive = false;
                } else {
                    ctx.drawImage(base_image5, this.posx, this.posy, width / 7, height / 7);
                }
            }
        }
        paint() {
            this.getShoot();
        }

    }







    //---------------------------------------------------------------



    let dev1 = new dev()
    let enemy_404_1 = new enemy_404(posy)
    let enemy_typeError_1 = new enemy_typeError()
    let enemy_bear_1 = new enemy_bear()
    let enemy_sheep_1 = new enemy_sheep()
    let enemy_sheep_2 = new enemy_main(0,0)
    let main_game_class = new game()

    console.log('console dev', dev1)

    //level1_sound.play();    only after the user interacts with the page is that you can play music chrome 66


    function animate() {

        main_game_class.main_function()

        requestAnimationFrame(animate)

    }

    animate();


};